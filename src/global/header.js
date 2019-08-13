import React from "react"
import { FaCartArrowDown } from "react-icons/fa"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="font-weight-bold text-uppercase display-flex"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <FaCartArrowDown
            style={{
              verticalAlign: "bottom",
              fontSize: "2rem",
              color: "yellow",
            }}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
