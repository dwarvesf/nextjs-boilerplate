import { Alert, AlertTitle, AlertContent, AlertBody, AlertIcon } from '.'

export default {
  title: 'components/Alert',
}

export const Default = () => {
  return (
    <div className="space-y-4 max-w-2xl">
      <Alert onClose={() => alert('close me!')}>
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertContent>
            Retry later or contact us for help.{' '}
            <a className="text-gray-100 underline" href="#contact">
              Contact us
            </a>
          </AlertContent>
        </AlertBody>
      </Alert>

      <Alert status="info" onClose={() => alert('close me!')}>
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Information</AlertTitle>
        </AlertBody>
      </Alert>

      <Alert status="success" onClose={() => alert('close me!')}>
        <AlertIcon />
        <AlertBody>
          <AlertTitle>Buy Character Successfully!</AlertTitle>
        </AlertBody>
      </Alert>

      <Alert status="warning" onClose={() => alert('close me!')}>
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
}

Default.story = {
  name: 'default',
}
