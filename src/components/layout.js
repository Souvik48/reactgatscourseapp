/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./Reusuable/Footer"
import Navbar from "./Reusuable/Navbar"


import "./bootstrap.min.css"
import "./layout.css"
//whatever css file you import at last it overwrites above all

const Layout = ({children}) => (
    <div>
    <Navbar/>
    {children}
    <Footer/>
    </div>
)
  
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
