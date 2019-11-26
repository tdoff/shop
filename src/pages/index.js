import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categoriesNav"
import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories />
    <Products />
  </Layout>
)

export default IndexPage
