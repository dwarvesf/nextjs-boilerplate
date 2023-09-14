import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useCallback, useState } from 'react'
import { WithChildren } from 'types/common'
import { login as signIn } from 'api'

interface AuthContextValues {
  isLogin: boolean
  login: (email: string, password: string) => Promise<any>
  logout: () => void
  user: typeof user
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
})

const tokenKey = 'df-token'
const getToken = () => window.localStorage.getItem(tokenKey)
// Demo User. Replace this with your own data from User Profile API
const user = {
  firstName: 'Charlie',
  lastName: 'Puth',
  avatar: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
  email: 'test@d.foundation',
}

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })

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

  return (
    <Provider value={{ isLogin, login, logout, user }}>{children}</Provider>
  )
}

export { AuthContextProvider, useAuthContext, getToken }
