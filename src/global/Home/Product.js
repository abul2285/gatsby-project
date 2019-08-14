import React from "react"
import { Col } from "react-bootstrap"
import { Card, Button } from "react-bootstrap"
import Img from "gatsby-image"
export default function Product({ product }) {
  return (
    <Col className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto text-center my-4">
      <Card style={{ width: "18rem" }}>
        <Img className="card-img-top" fluid={product.image.fluid} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.price}
          </Card.Subtitle>
          <Button
            variant="outline-warning"
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-image={product.image.fluid.src}
            data-item-url="https://mf-gatsby-project.netlify.com/"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
