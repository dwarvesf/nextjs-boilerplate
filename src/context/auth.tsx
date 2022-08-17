import { createContext, isSSR } from '@dwarvesf/react-utils'
import { useCallback, useState } from 'react'
import { WithChildren } from 'types/common'

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
const user = {
  firstName: 'Charlie',
  lastName: 'Puth',
  avatar:
    'https://cdn.lorem.space/images/face/.cache/150x150/jake-fagan-Y7C7F26fzZM-unsplash.jpg',
}

const AuthContextProvider = ({ children }: WithChildren) => {
  const [isLogin, setIsLogin] = useState(() => {
    return isSSR() ? false : Boolean(window.localStorage.getItem(tokenKey))
  })

  const login = useCallback((email: string, password: string) => {
    return new Promise((resolve, reject) => {
      if (email === 'test@d.foundation' && password === 'test') {
        setIsLogin(true)
        window.localStorage.setItem(tokenKey, '1')
        resolve('success')
      } else {
        reject(new Error('Incorrect email or password'))
      }
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

export { AuthContextProvider, useAuthContext }
