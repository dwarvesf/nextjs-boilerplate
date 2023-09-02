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

  const login = useCallback((email: string, password: string) => {
    // Demo account
    if (email === user.email) {
      setIsLogin(true)
      window.localStorage.setItem(tokenKey, 'demo-account')
      return Promise.resolve(user)
    }
    return signIn({ email, password })
      .then((res) => {
        if (res.data) {
          setIsLogin(true)
          window.localStorage.setItem(tokenKey, res.data.accessToken)
          return res.data
        }
        throw new Error('Incorrect email or password')
      })
      .catch(() => {
        throw new Error('Incorrect email or password')
      })
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
