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
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

interface Props {
  trigger: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

const validationSchema = z.object({
  firstName: z.string().min(1, 'Required.'),
  lastName: z.string().min(1, 'Required.'),
})

export const ProfileModal = (props: Props) => {
  const { trigger, open, onOpenChange } = props
  const { user } = useAuthContext()
  const formInstance = useForm({
    defaultValues: { firstName: user?.firstName, lastName: user?.lastName },
    resolver: zodResolver(validationSchema),
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
              <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5 mb-8">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    placeholder="First name"
                    rules={{ required: 'Required' }}
                    fullWidth
                  />
                  <FormInput
                    label="Last name"
                    name="lastName"
                    placeholder="Last name"
                    rules={{ required: 'Required' }}
                    fullWidth
                  />
                </div>
              </form>
            </FormProvider>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" fullWidth>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              appearance="primary"
              fullWidth
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
