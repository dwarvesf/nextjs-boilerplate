import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="auto"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="flex min-h-screen flex-col justify-between">
          <NProgressHandler />
          <main>
            <Header />
            <div className="max-w-3xl mx-auto py-20">
              <Component {...pageProps} />
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }
}
export default MyApp
