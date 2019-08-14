import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import Title from "../Title"
import Product from "./Product"
export default () => (
  <StaticQuery
    query={graphql`
      {
        products: allContentfulCoffeeProduct {
          edges {
            node {
              id
              title
              price
              image {
                fluid(maxHeight: 426) {
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Title title="our products" />
        <Row>
          {data.products.edges.map(edge => {
            return <Product key={edge.node.id} product={edge.node} />
          })}
        </Row>
      </Container>
    )}
  />
)
