import { storiesOf } from '@storybook/react'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { FormCheckboxGroup } from '.'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

storiesOf('components/Form/FormCheckboxGroup', module).add('default', () => {
  const formInstance = useForm({
    defaultValues: { stack: [] },
  })
  const { handleSubmit, getValues } = formInstance

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <FormCheckboxGroup name="stack" className="space-y-3">
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
})
