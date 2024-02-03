import React from 'react'
import './styles.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Wrapper = () => {
  return (
    <div className = 'custom-border square'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Wrapper
