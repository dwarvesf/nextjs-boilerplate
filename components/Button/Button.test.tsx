/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './index'

describe('<Button />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Button>Hello</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
