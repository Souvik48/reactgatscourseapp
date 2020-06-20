import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusuable/HeroSection"
import InfoBlock from "../components/Reusuable/InfoBlock"
import DualInfoBlock from "../components/Reusuable/DualInfoBlock"
import Teamphotosection from "../components/About/Teamphotosection"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    
    img= {data.img.childImageSharp.fluid}
    title="About LearnCodeOnline" //go to css
    subtitle=""
    heroclass="about-background" //go to css to style this hero-background
    /> 
    <DualInfoBlock heading="A message from CEO" 
    img= "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=person-holding-node-text-1261427.jpg&fm=jpg"
    />
    <InfoBlock heading="About Vision" />
    <Teamphotosection />
  </Layout>
)
//<InfoBlock heading="About Us" />
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`


export default AboutPage
 