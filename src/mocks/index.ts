async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen({
      onUnhandledRequest: 'bypass', // Bypass unhandled requests on nextjs server
    })
  } else {
    const { worker } = await import('./browser')
    worker.start({
      onUnhandledRequest: 'bypass', // Bypass unhandled requests on browser
    })
  }
}

initMocks()

export {}
