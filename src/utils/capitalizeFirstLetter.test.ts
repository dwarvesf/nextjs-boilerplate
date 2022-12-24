import { capitalizeFirstLetter } from './capitalizeFirstLetter'

test.each([
  ['abc', 'Abc'],
  ['aBC', 'ABC'],
  ['11111', '11111'],
  ['XYZ', 'XYZ'],
  ['', ''],
])('capitalizeFirstLetter(%s)', (input, expected) => {
  expect(capitalizeFirstLetter(input)).toBe(expected)
})
