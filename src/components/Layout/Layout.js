import React, { useState } from "react"
import Drawer from "../Drawer/Drawer"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Drawer open={open} toggleOpen={toggleOpen} />
      <Header toggleOpen={toggleOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
