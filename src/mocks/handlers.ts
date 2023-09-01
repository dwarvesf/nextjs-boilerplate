import { getAuthMSW } from 'api/auth/auth.msw'
import { getUserMSW } from 'api/user/user.msw'

export const handlers = [...getAuthMSW(), ...getUserMSW()]
