import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useCallback, useEffect, useState } from 'react'
import { WithChildren } from 'types/common'
import { Me, getMe, login as signIn } from 'api'
import { emitter } from 'utils/emitter'

interface AuthContextValues {
  isLogin: boolean
  login: (email: string, password: string) => Promise<any>
  logout: () => void
  user?: Me
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
})

const tokenKey = 'df-token'
const userKey = 'df-user'
const getToken = () => window.localStorage.getItem(tokenKey)
const cleanAuth = () => {
  window.localStorage.removeItem(tokenKey)
  window.localStorage.removeItem(userKey)
}

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })
  const [user, setUser] = useState<Me>()

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await signIn({ email, password })
      if (res.data) {
        setIsLogin(true)
        window.localStorage.setItem(tokenKey, res.data.accessToken)
      }
    } catch (error) {
      throw new Error('Incorrect email or password')
    }
  }, [])

  const logout = useCallback(() => {
    setIsLogin(false)
    cleanAuth()
  }, [])

  const fetchUserInfo = useCallback(async () => {
    try {
      const res = await getMe()
      if (res.data) {
        setUser(res.data)
        // Save user info to local storage
        window.localStorage.setItem(userKey, JSON.stringify(res.data))
      }
    } catch {
      // Failed to fetch user profile -> force logout
      logout()
    }
  }, [logout])

  useEffect(() => {
    const bootstrapAsync = async () => {
      if (isLogin) {
        // Retrieve user info from local storage first
        const userRaw = window.localStorage.getItem(userKey)
        if (userRaw) {
          try {
            setUser(JSON.parse(userRaw) as Me)
          } catch {
            // Failed to parse user info -> try to fetch new data
            fetchUserInfo()
          }
        } else {
          fetchUserInfo()
        }
      }
    }
    bootstrapAsync()

    emitter.on('FORCE_LOGOUT', logout)
    return () => {
      emitter.off('FORCE_LOGOUT', logout)
    }
  }, [isLogin, logout, fetchUserInfo])

  return (
    <Provider value={{ isLogin, login, logout, user }}>{children}</Provider>
  )
}

export { AuthContextProvider, useAuthContext, getToken }
