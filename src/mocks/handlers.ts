import { getPetMSW } from 'api/pet/pet.msw'
import { getUserMSW } from 'api/user/user.msw'
import { getStoreMSW } from 'api/store/store.msw'

export const handlers = [...getPetMSW(), ...getUserMSW(), ...getStoreMSW()]
