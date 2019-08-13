import React from "react"
import { Row, Col } from "react-bootstrap"

const Title = ({ title }) => {
  return (
    <Row>
      <Col className="text-center text-danger">
        <h1 className="display-4 text-capitalize">{title}</h1>
      </Col>
    </Row>
  )
}

export default Title
