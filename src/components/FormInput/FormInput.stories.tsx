import { storiesOf } from '@storybook/react'
import { Button } from 'components/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput } from './FormInput'

storiesOf('components/form/FormInput', module).add('default', () => {
  const formInstance = useForm({
    defaultValues: { email: '', password: '' },
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 max-w-xs mb-10">
          <FormInput
            label="Email"
            placeholder="Email"
            name="email"
            fullWidth
            rules={{ required: 'Required' }}
          />
          <FormInput
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            fullWidth
            rules={{ required: 'Required' }}
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
})
