import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Header from 'components/Header'
import Footer from 'components/Footer'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
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
    )
  }
}
export default MyApp
