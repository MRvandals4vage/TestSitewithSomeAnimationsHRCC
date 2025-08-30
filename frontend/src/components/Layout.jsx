import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="header-spacer" />
      <main className="flex-grow container">{children}</main>
      <Footer/>
    </div>
  )
}
