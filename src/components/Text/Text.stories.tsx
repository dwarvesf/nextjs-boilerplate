import { Text } from '.'

export default {
  title: 'components/Text',
}

export const Default = () => {
  return (
    <div className="space-y-4">
      <Text className="text-6xl">(6xl) In love with React & Next</Text>
      <Text className="text-5xl">(5xl) In love with React & Next</Text>
      <Text className="text-4xl">(4xl) In love with React & Next</Text>
      <Text className="text-3xl">(3xl) In love with React & Next</Text>
      <Text className="text-2xl">(2xl) In love with React & Next</Text>
      <Text className="text-xl">(xl) In love with React & Next</Text>
      <Text className="text-lg">(lg) In love with React & Next</Text>
      <Text>In love with React & Next</Text>
    </div>
  )
}

Default.story = {
  name: 'default',
}
