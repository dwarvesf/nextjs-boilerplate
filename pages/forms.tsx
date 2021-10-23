import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from 'components/FormInput'
import { Button } from 'components/Button'
import { FormSelect } from 'components/FormSelect'
import { Divider } from 'components/Divider'
import { FormCheckboxGroup } from 'components/FormCheckboxGroup'
import { Checkbox } from 'components/Checkbox'

const personalFormDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  address: '',
  city: '',
  state: '',
  zip: '',
}

const PersonalForm = () => {
  const formInstance = useForm({
    defaultValues: personalFormDefaultValues,
  })
  const { handleSubmit } = formInstance

  const onSubmit = (data: typeof personalFormDefaultValues) =>
    alert(JSON.stringify(data))

  return (
    <Card spacing={false}>
      <FormProvider {...formInstance}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6 p-6">
            <div className="col-span-3">
              <FormInput
                label="First name"
                name="firstName"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-3">
              <FormInput
                label="Last name"
                name="lastName"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-4">
              <FormInput
                label="Email address"
                name="email"
                type="email"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-3">
              <FormSelect
                label="Country / Region"
                name="country"
                rules={{ required: 'Required' }}
              >
                <option value="Vietnam">Vietnam</option>
                <option value="United State">United State</option>
                <option value="Canada">Canada</option>
                <option value="Singapore">Singapore</option>
              </FormSelect>
            </div>
            <div className="col-span-6">
              <FormInput
                label="Street address"
                name="address"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-2">
              <FormInput
                label="City"
                name="city"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-2">
              <FormInput
                label="State / Province"
                name="state"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
            <div className="col-span-2">
              <FormInput
                label="ZIP / Postal"
                name="zip"
                fullWidth
                rules={{ required: 'Required' }}
              />
            </div>
          </div>
          <div className="px-5 py-2 text-right bg-gray-50 rounded-b-md">
            <Button appearance="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </Card>
  )
}

const notificationDefaultFormValues = { notification: [] }

const NotificationForm = () => {
  const formInstance = useForm({
    defaultValues: notificationDefaultFormValues,
  })
  const { handleSubmit } = formInstance

  const onSubmit = (data: typeof notificationDefaultFormValues) =>
    alert(JSON.stringify(data))

  return (
    <Card spacing={false}>
      <FormProvider {...formInstance}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6 p-6">
            <div className="col-span-6 space-y-4">
              <Text>By email</Text>
              <FormCheckboxGroup name="notification" className="space-y-3">
                <Checkbox value="comments">Comments</Checkbox>
                <Checkbox value="candidates">Candidates</Checkbox>
                <Checkbox value="offers">Offers</Checkbox>
              </FormCheckboxGroup>
            </div>
          </div>
          <div className="px-5 py-2 text-right bg-gray-50 rounded-b-md">
            <Button appearance="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </Card>
  )
}

const FormsPage = () => {
  return (
    <Layout>
      <Heading as="h3">Forms</Heading>

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <Text className="text-lg">Personal Information</Text>
          <Text className="text-sm text-gray-500">
            Use a permanent address where you can receive email.
          </Text>
        </div>
        <div className="col-span-2">
          <PersonalForm />
        </div>
      </div>

      <Divider className="h-0" color="gray-200" />

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <Text className="text-lg">Notifications</Text>
          <Text className="text-sm text-gray-500">
            Decide which communications you'd like to receive and how.
          </Text>
        </div>
        <div className="col-span-2">
          <NotificationForm />
        </div>
      </div>
    </Layout>
  )
}

export default FormsPage
