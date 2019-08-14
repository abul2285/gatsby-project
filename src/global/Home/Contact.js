import React from "react"
import Title from "../Title"
import { Form, Button, Container, Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <section className="contact bg-secondary py-5">
      <Container>
        <Title title="contact with us" />
        <Row>
          <Col className="col-10 col-sm-8 col-md-6 mx-auto">
            <Form
              action="https://formspree.io/mdabulhossain780@gmail.com"
              method="POST"
            >
              <Form.Group controlId="formGroupText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  placeholder="John smith"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="something@email.com"
                  name="Email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="Text"
                  placeholder="Enter your text here...."
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
