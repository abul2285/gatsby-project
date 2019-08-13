import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark">
      <Container>
        <Row>
          <Col
            sm={6}
            md={10}
            className="col text-center text-warning text-capitalize mx-auto"
          >
            <h2 className="display-5 footer-text text-center">
              all right reserve &copy; {new Date().getFullYear().toString()}
            </h2>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
