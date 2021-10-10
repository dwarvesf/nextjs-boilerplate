import { Button } from 'components/Button'
import { useAuthContext } from 'context/auth'

export const Layout = () => {
  const { logout } = useAuthContext()
  return (
    <div>
      test <Button onClick={() => logout()}>Logout</Button>
    </div>
  )
}
