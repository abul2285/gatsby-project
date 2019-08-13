import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Title from "../Title"
import Image from "gatsby-image"

function getCategory(categories) {
  let tempItems = categories.map(({ node: { category } }) => {
    return category
  })
  let tempCategory = new Set(tempItems)
  let Categories = Array.from(tempCategory)
  Categories = ["all", ...Categories]
  return Categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      category: getCategory(props.items.edges),
    }
  }
  clickHeandler = item => {
    console.log(item)
    let tempItem = [...this.state.items]
    if (item === "all") {
      this.setState({
        coffeeItems: tempItem,
      })
    } else {
      let items = tempItem.filter(({ node: { category } }) => category === item)
      this.setState({
        coffeeItems: items,
      })
    }
  }
  render() {
    // console.log(this.state.coffeeItems)
    if (this.state.coffeeItems.length > 0) {
      return (
        <Container>
          <Title title="menu items" />
          <Row>
            <Col md={8} className="d-flex justify-content-center mx-auto">
              {this.state.category.map((v, i) => {
                return (
                  <Button
                    variant="outline-warning"
                    className="m-3"
                    key={i}
                    onClick={() => {
                      this.clickHeandler(v)
                    }}
                  >
                    {v}
                  </Button>
                )
              })}
            </Col>
          </Row>
          <Row>
            {this.state.coffeeItems.map(
              ({
                node: {
                  title,
                  price,
                  id,
                  description: { description },
                  image: { fixed },
                },
              }) => {
                return (
                  <Col key={id} className="col-11 col-md-5 my-3 d-flex mx-auto">
                    <div>
                      <Image fixed={fixed} />
                    </div>
                    <div className="ml-3 flex-grow-1 ">
                      <div className="d-flex justify-content-between">
                        <h6 className="text-warning mb-0">
                          <small>{title}</small>
                        </h6>
                        <h6 className="text-danger mb-0">
                          <small>${price}</small>
                        </h6>
                      </div>
                      <div>
                        <small className="text-muted">{description}</small>
                      </div>
                    </div>
                  </Col>
                )
              }
            )}
          </Row>
        </Container>
      )
    } else {
      return <div>nothih to display</div>
    }
  }
}
