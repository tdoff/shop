import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function productDetails({ pageContext: product }) {
  console.log({ product })
  return (
    <Layout>
      <SEO title={product.name} />
      {product.name}
    </Layout>
  )
}
