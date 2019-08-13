import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import BackgroundSection from "../global/BackgroundSection"
import Info from "../global/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      styleClass="min-vh-100 d-flex justify-content-center align-items-center hero-image"
      title="index title"
    />
    <Info />
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
  }
`
export default IndexPage
