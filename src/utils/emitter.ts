import mitt from 'mitt'

type Events = {
  FORCE_LOGOUT: void
}

export const emitter = mitt<Events>() // inferred as Emitter<Events>
