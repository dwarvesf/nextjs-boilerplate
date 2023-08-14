import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://static.cloudflareinsights.com" rel="preconnect" />
        <meta content="#E13F5E" name="theme-color" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="auto"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
