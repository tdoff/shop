import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products/Products"

export default function manufacturerDetails({ pageContext: manufacturer }) {
  return (
    <Layout>
      <SEO title={manufacturer.name} />
      <Products products={manufacturer.product} />
    </Layout>
  )
}
