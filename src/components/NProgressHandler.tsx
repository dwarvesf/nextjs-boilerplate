import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, speed: 750 })

const NProgressHandler = () => {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleComplete = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return null
}

export default NProgressHandler
