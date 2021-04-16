import { Link } from "gatsby"
import React from "react"

const LinkC = ({ children, href, style, onClick }) => {
  return (
    <Link style={{ ...style }} to={`${href}`} onClick={onClick}>
      {children}
    </Link>
  )
}

export default LinkC
