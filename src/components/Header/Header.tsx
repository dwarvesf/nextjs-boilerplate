import { useDisclosure } from '@dwarvesf/react-hooks'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from 'components/DropdownMenu'
import { IconLogout } from 'components/icons/components/IconLogout'
import { IconPencilAlt } from 'components/icons/components/IconPencilAlt'
import { Text } from 'components/Text'
import { useAuthContext } from 'context/auth'
import React from 'react'
import { ProfileModal } from './ProfileModal'

export const Header = () => {
  const { logout, user } = useAuthContext()
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <header className="py-2 px-5 flex justify-end mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger
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
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <ProfileModal
            trigger={
              <DropdownMenuItem
                onSelect={(event) => {
                  event.preventDefault()
                  onOpen()
                }}
              >
                <IconPencilAlt className="w-5 h-5 mr-2" />
                <span>Edit profile</span>
              </DropdownMenuItem>
            }
            open={isOpen}
            onOpenChange={(open) => (open ? onOpen : onClose)}
          />

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout} data-testid="logout-button">
            <IconLogout className="mr-2 w-5 h-5" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
