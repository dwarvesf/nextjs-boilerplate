import { Button } from 'components/Button'
import { FormInput } from 'components/FormInput'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalProps,
  ModalTitle,
} from 'components/Modal'
import { toast } from 'components/Toast'
import { useAuthContext } from 'context/auth'
import { FormProvider, useForm } from 'react-hook-form'

interface Props extends ModalProps {}

export const ProfileModal = (props: Props) => {
  const { isOpen, onClose } = props
  const { user } = useAuthContext()
  const formInstance = useForm({
    defaultValues: { firstName: user.firstName, lastName: user.lastName },
  })
  const { handleSubmit } = formInstance

  const onSubmit = () => {
    onClose()
    toast.success({
      title: 'Profile updated',
      message: 'Lorem ipsum dolor sit amet, consectetur.',
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent size="max-w-sm">
        <ModalCloseButton />
        <ModalTitle className="text-xl">Edit profile</ModalTitle>
        <FormProvider {...formInstance}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="space-y-5 mb-8">
              <FormInput
                label="First name"
                placeholder="First name"
                name="firstName"
                fullWidth
                rules={{ required: 'Required' }}
              />
              <FormInput
                label="Last name"
                placeholder="Last name"
                name="lastName"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button appearance="primary">Submit</Button>
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  )
}
