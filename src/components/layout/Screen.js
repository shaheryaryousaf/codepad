import React from 'react'

// Import Components
import Header from './Header'
import Footer from './Footer'

const Screen = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Screen
