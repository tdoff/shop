import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Manufacturers from "../components/manufacturers/Manufacturers"
import styled from "styled-components"

const Title = styled.h2`
  text-align: center;
`

export default function categoryDetails({ pageContext }) {
  const manufacturers = pageContext.category.manufacturers
  return (
    <Layout>
      <SEO title={pageContext.category.name} />
      <div>
        <Title>Производители</Title>
        <Manufacturers manufacturers={manufacturers} />
      </div>
    </Layout>
  )
}
