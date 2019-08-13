import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Title from "../Title"
import { Link } from "gatsby"

const Info = () => {
  return (
    <div>
      <Container className="py-5">
        <Title title="our story" />
        <Row>
          <Col lg={10} sm={8} className="mx-auto text-center">
            <p className="lead text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              deserunt recusandae deleniti est dignissimos tenetur voluptatibus
              nesciunt beatae repudiandae iure blanditiis nam, eaque distinctio
              illum suscipit ullam laboriosam voluptate architecto id tempore
              consequuntur. Doloremque, voluptate enim fugit esse facere
              suscipit ratione inventore, cupiditate incidunt odio
              exercitationem optio quam qui rem!
            </p>
            <Link to="/about/">
              <Button variant="warning" className="about-button">
                About Us
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Info
