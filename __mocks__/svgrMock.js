import { forwardRef } from 'react'

const SvgrMock = forwardRef((props, ref) => <span ref={ref} {...props} />)

export const ReactComponent = SvgrMock

export default SvgrMock
