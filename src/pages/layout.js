import React from "react"
import Header from "../global/header"
import "../style/style.scss"
import Footer from "../global/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
