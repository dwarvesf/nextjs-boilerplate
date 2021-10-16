import { IconHome } from 'components/icons/components/IconHome'
import { IconTable } from 'components/icons/components/IconTable'
import { ROUTES } from 'constants/routes'
import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { WithChildren } from 'types/common'
import { Logo } from 'components/Logo'
import { Header } from 'components/Header'

const menuItems = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, Icon: IconHome },
  { name: 'Forms', href: ROUTES.FORMS, Icon: IconTable },
]

export const Layout = ({ children }: WithChildren) => {
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
      </aside>
      <main className="flex-1">
        <Header />
        <div className="px-8 py-6">
          <div className="flex space-y-6 flex-col max-w-7xl w-full mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
