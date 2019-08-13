import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import BackgroundSection from "../global/BackgroundSection"
import Info from "../global/Home/Info"

export default ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.file.childImageSharp.fluid}
      styleClass="min-vh-100 d-flex justify-content-center align-items-center hero-image"
      title="index title"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    file(
      absolutePath: {
        eq: "C:/Users/abul3/Desktop/Coffee/src/images/default-background.jpeg"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
