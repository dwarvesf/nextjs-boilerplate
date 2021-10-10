import React, { useEffect } from 'react'
import { Layout } from 'components/Layout'
import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'

const App = () => {
  const { isLogin } = useAuthContext()
  const { push } = useRouter()
  useEffect(() => {
    if (!isLogin) {
      push(ROUTES.LOGIN)
    }
  }, [isLogin, push])

  if (!isLogin) {
    return null
  }

  return <Layout />
}

export default App
