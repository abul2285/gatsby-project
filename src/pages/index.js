import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import BackgroundSection from "../global/BackgroundSection"
import Info from "../global/Home/Info"
import Menu from "../global/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="min-vh-100 d-flex justify-content-center align-items-center hero-image"
      title="index title"
    />
    <Info />
    <Menu items={data.menu} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(height: 100, width: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default IndexPage
