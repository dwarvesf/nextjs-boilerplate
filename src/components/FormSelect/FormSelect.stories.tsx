import { Button } from 'components/Button'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormSelect } from './FormSelect'

export default {
  title: 'components/form/FormSelect',
}

const validationSchema = z.object({
  assignee: z.string(),
})

export const Default = () => {
  const formInstance = useForm({
    defaultValues: { assignee: 'John Doe' },
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 max-w-xs mb-10">
          <FormSelect
            label="Assign to"
            name="assignee"
            placeholder="Assign to"
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
}

Default.story = {
  name: 'default',
}
