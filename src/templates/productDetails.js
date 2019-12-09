import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ImageCarousel from "../components/ImageCarousel"

const Description = styled.div`
  margin-top: 6px;
  padding: 6px;
`
const ShortDescription = styled.div`
  padding: 6px;
`

export default function productDetails({ pageContext: product }) {
  return (
    <Layout>
      <SEO title={product.name} />
      <ImageCarousel images={product.images} />
      <ShortDescription className="paper">{product.name}</ShortDescription>
      <Description className="paper">
        {documentToReactComponents(product.description.json)}
      </Description>
    </Layout>
  )
}
