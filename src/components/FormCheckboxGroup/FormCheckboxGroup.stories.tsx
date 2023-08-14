import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormCheckboxGroup } from '.'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

export default {
  title: 'components/Form/FormCheckboxGroup',
}

const validationSchema = z.object({
  stack: z
    .string()
    .array()
    .min(1, { message: 'Stack must contain at least 1 element(s)' }),
})

export const Default = () => {
  const formInstance = useForm({
    defaultValues: { stack: [] },
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormCheckboxGroup className="space-y-3" name="stack">
            <Checkbox value="1">HTML & CSS</Checkbox>
            <Checkbox value="2">JavaScript</Checkbox>
            <Checkbox value="3" invalid>
              React & NextJS
            </Checkbox>
          </FormCheckboxGroup>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
          <pre className="text-gray-200 text-sm p-4 rounded-lg bg-gray-800">
            {JSON.stringify(getValues())}
          </pre>
        </div>
      </form>
    </FormProvider>
  )
}

Default.story = {
  name: 'default',
}
