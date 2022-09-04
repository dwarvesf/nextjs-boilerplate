import { storiesOf } from '@storybook/react'
import { Button } from 'components/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormSelect } from './FormSelect'

storiesOf('components/form/FormSelect', module).add('default', () => {
  const formInstance = useForm({
    defaultValues: { assignee: 'John Doe' },
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 max-w-xs mb-10">
          <FormSelect
            label="Assign to"
            placeholder="Assign to"
            name="assignee"
            rules={{ required: 'Required' }}
          >
            <option value="John Doe">John Doe</option>
            <option value="Devon Webb">Devon Webb</option>
            <option value="Kim Scott">Kim Scott</option>
          </FormSelect>
          <Button appearance="primary" type="submit">
            Assign
          </Button>
        </div>
        <pre className="text-gray-200 text-sm p-4 rounded-lg bg-gray-800">
          {JSON.stringify(getValues())}
        </pre>
      </form>
    </FormProvider>
  )
})
