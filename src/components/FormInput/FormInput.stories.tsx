import { Button } from 'components/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormInput } from './FormInput'

export default {
  title: 'components/form/FormInput',
}

const validationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, {
      message: 'Password must contain at least 1 uppercase letter',
    })
    .regex(/\d/, {
      message: 'Password must contain at least 1 numeric digit',
    }),
})

export const Default = () => {
  const formInstance = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 max-w-xs mb-10">
          <FormInput
            label="Email"
            name="email"
            placeholder="Email"
            rules={{ required: 'Required' }}
            fullWidth
          />
          <FormInput
            label="Password"
            name="password"
            placeholder="Password"
            rules={{ required: 'Required' }}
            type="password"
            fullWidth
          />
          <Button appearance="primary" type="submit">
            Create an account
          </Button>
        </div>
        <pre className="text-gray-200 text-sm p-4 rounded-lg bg-gray-800">
          {JSON.stringify(getValues())}
        </pre>
      </form>
    </FormProvider>
  )
}

Default.story = {
  name: 'default',
}
