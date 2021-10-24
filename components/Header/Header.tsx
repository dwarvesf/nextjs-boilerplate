import { useDisclosure } from '@dwarvesf/react-hooks'
import { Menu, Transition } from '@headlessui/react'
import { Divider } from 'components/Divider'
import { IconLogout } from 'components/icons/components/IconLogout'
import { IconPencilAlt } from 'components/icons/components/IconPencilAlt'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'
import React, { Fragment } from 'react'
import { ProfileModal } from './ProfileModal'

export const Header = () => {
  const { logout, user } = useAuthContext()
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <header className="py-2 px-5 flex justify-end mx-auto">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="inline-flex focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center space-x-3"
          data-testid="profile-button"
        >
          <img
            src={user.avatar}
            alt=""
            width="40"
            height="40"
            className="rounded-full"
          />
          <Text as="span" className="text-gray-600 text-sm">
            {user.firstName}
          </Text>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-48 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-pink-600 text-white' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2`}
                    onClick={onOpen}
                  >
                    <IconPencilAlt className="w-5 h-5" />
                    <span>Edit profile</span>
                  </button>
                )}
              </Menu.Item>
              <Divider className="h-0 mx-2 mb-px" />
              <div />
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-pink-600 text-white' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2`}
                    onClick={logout}
                    data-testid="logout-button"
                  >
                    <IconLogout className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ProfileModal isOpen={isOpen} onClose={onClose} />
    </header>
  )
}
