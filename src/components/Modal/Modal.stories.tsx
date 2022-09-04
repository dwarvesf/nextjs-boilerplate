import { useDisclosure } from '@dwarvesf/react-hooks'
import { storiesOf } from '@storybook/react'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import React from 'react'
import { Modal, ModalCloseButton, ModalContent, ModalTitle } from '.'

storiesOf('components/Modal', module).add('default', () => {
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })

  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent size="max-w-sm" className="text-center pt-8">
          <ModalCloseButton />
          <ModalTitle className="text-xl">Payment successful</ModalTitle>
          <Text className="text-gray-500 text-sm my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Button appearance="primary" onClick={onClose} fullWidth>
            Go back to dashboard
          </Button>
        </ModalContent>
      </Modal>
    </div>
  )
})
