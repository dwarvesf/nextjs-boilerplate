import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'
import { Toaster } from 'components/Toast'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('mocks')
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>NextJS boilerplate | Dwarves Foundation</title>
          <meta
            content="NextJS boilerplate | Dwarves Foundation"
            property="og:title"
          />
          <meta content="@dwarvesf" name="twitter:site" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta
            content="Opinionated React template for building web applications at scale."
            name="description"
          />
          <meta
            content="Opinionated React template for building web applications at scale."
            property="og:description"
          />
          <meta content="/thumbnail.jpeg" property="og:image" />
          <meta content="/thumbnail.jpeg" name="twitter:image" />
        </Head>
        <AuthContextProvider>
          <NProgressHandler />
          <Component {...pageProps} />
        </AuthContextProvider>
        <Toaster />
      </>
    )
  }
}
export default MyApp
