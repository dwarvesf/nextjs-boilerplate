import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-900 py-10">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white font-semibold text-xl">Next boilerplate</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
