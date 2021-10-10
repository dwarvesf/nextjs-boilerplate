import { Button } from 'components/Button'
import { IconHome } from 'components/icons/components/IconHome'
import { IconTable } from 'components/icons/components/IconTable'
import { ROUTES } from 'constants/routes'
import { useAuthContext } from 'context/auth'
import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { WithChildren } from 'types/common'
import { Logo } from 'components/Logo'

const menuItems = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, Icon: IconHome },
  { name: 'Forms', href: ROUTES.FORMS, Icon: IconTable },
]

export const Layout = ({ children }: WithChildren) => {
  const { logout } = useAuthContext()
  const { pathname } = useRouter()

  return (
    <div className="flex h-full bg-gray-100">
      <aside className="w-72 bg-gray-800 h-screen p-4 flex justify-between flex-col">
        <div className="space-y-5">
          <Logo hasText />
          <nav className="space-y-1">
            {menuItems.map(({ Icon, name, href }) => {
              return (
                <Link href={href} key={name}>
                  <a
                    className={cx(
                      'flex w-full p-2 space-x-3 rounded-md',
                      'bg-transparent duration-200 transition-all',
                      {
                        'bg-gray-900 text-gray-300': pathname === href,
                        'text-gray-400 hover:text-gray-100': pathname !== href,
                      },
                    )}
                  >
                    <Icon className="w-6 h-6" /> <span>{name}</span>
                  </a>
                </Link>
              )
            })}
          </nav>
        </div>
        <Button appearance="secondary" onClick={() => logout()}>
          Logout
        </Button>
      </aside>
      <div className="flex-1 px-8 py-6">{children}</div>
    </div>
  )
}
