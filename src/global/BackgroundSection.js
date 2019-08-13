import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="display-4 text-uppercase text-white text-center">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "test background",
  styleClass: "hero-image",
}

export default BackgroundSection
