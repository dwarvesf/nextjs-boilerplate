import { Heading } from '.'

export default {
  title: 'components/Heading',
}

export const Default = () => {
  return (
    <div className="space-y-4">
      <Heading as="h1">(h1) In love with React & Next</Heading>
      <Heading as="h2">(h2) In love with React & Next</Heading>
      <Heading as="h3">(h3) In love with React & Next</Heading>
      <Heading as="h4">(h4) In love with React & Next</Heading>
      <Heading as="h5">(h5) In love with React & Next</Heading>
      <Heading as="h6">(h6) In love with React & Next</Heading>
    </div>
  )
}

Default.story = {
  name: 'default',
}
