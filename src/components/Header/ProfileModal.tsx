import { Button } from 'components/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from 'components/Dialog'
import { FormInput } from 'components/FormInput'
import { toast } from 'components/Toast'
import { useAuthContext } from 'context/auth'
import { FormProvider, useForm } from 'react-hook-form'

interface Props {
  trigger: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ProfileModal = (props: Props) => {
  const { trigger, open, onOpenChange } = props
  const { user } = useAuthContext()
  const formInstance = useForm({
    defaultValues: { firstName: user.firstName, lastName: user.lastName },
  })
  const { handleSubmit } = formInstance

  const onSubmit = () => {
    onOpenChange(false)
    toast.success({
      title: 'Profile updated',
      message: 'Lorem ipsum dolor sit amet, consectetur.',
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
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
              </form>
            </FormProvider>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button fullWidth type="button">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              fullWidth
              appearance="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
