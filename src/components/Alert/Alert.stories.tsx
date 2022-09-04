import { storiesOf } from '@storybook/react'
import { Alert, AlertTitle, AlertContent, AlertBody, AlertIcon } from '.'

storiesOf('components/Alert', module).add('default', () => {
  return (
    <div className="space-y-4 max-w-2xl">
      <Alert onClose={() => alert('close me!')}>
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertContent>
            Retry later or contact us for help.{' '}
            <a className="text-gray-100 underline">Contact us</a>
          </AlertContent>
        </AlertBody>
      </Alert>

      <Alert onClose={() => alert('close me!')} status="info">
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Information</AlertTitle>
        </AlertBody>
      </Alert>

      <Alert onClose={() => alert('close me!')} status="success">
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Buy Character Successfully!</AlertTitle>
        </AlertBody>
      </Alert>

      <Alert onClose={() => alert('close me!')} status="warning">
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Information</AlertTitle>
          <AlertContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AlertContent>
        </AlertBody>
      </Alert>
    </div>
  )
})
