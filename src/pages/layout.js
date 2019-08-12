import React from "react"
import Header from "../global/header"
import allStyle from "../style/style.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
