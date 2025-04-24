import React from 'react'
import Navbar from './navbar'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
        {children}
    </div>
  )
}

export default Layout
