import React from "react"
import { ProductCard } from "./ProductCard"
import styled from "styled-components"

const List = styled.ul`
  margin: 4px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5px;
`

const LI = styled.li`
  background-color: #fff;
  flex: 0 0 50%;
  height: 300px;
  padding: 0 8px;
  border: 0.5px solid silver;
`

export default function Products({ products }) {
  return (
    <List>
      {products.map(product => (
        <LI key={product.id}>
          <ProductCard product={product} />
        </LI>
      ))}
    </List>
  )
}
