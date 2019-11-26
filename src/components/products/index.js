import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductCard } from "./ProductCard"

export default function Products() {
  const data = useStaticQuery(graphql`
    {
      allContentfulProduct {
        nodes {
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
            id
          }
          name
          pricePoint
          id
        }
      }
    }
  `)
  const products = data.allContentfulProduct.nodes

  return products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))
}
