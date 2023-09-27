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
    window.localStorage.removeItem(tokenKey)
  }, [])

  useEffect(() => {
    const bootstrapAsync = async () => {
      if (isLogin) {
        const userRaw = window.localStorage.getItem(userKey)
        if (userRaw) {
          setUser(JSON.parse(userRaw) as Me)
        } else {
          // Fecth user info
          try {
            const res = await getMe()
            if (res.data) {
              setUser(res.data)
            }
          } catch (error) {
            // Failed to fetch user profile -> force logout
            logout()
          }
        }
      }
    }
    bootstrapAsync()

    emitter.on('FORCE_LOGOUT', logout)
    return () => {
      emitter.off('FORCE_LOGOUT', logout)
    }
  }, [isLogin, logout])

  return (
    <Provider value={{ isLogin, login, logout, user }}>{children}</Provider>
  )
}

export { AuthContextProvider, useAuthContext, getToken }
