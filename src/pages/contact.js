import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusuable/HeroSection"
import InfoBlock from "../components/Reusuable/InfoBlock"
import Contact from "../components/Contact/contact"


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    
    img= {data.img.childImageSharp.fluid}
    title="Contact-us"
    subtitle=""
    heroclass="about-background" //go to css to style this hero-background
    />
    <InfoBlock heading="How can we help?" />
    <Contact/>
  </Layout>
)
//<InfoBlock heading="About Us" />
export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`


export default ContactPage
 