import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categoriesNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories />
  </Layout>
)

export default IndexPage
