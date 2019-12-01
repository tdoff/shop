import React from "react"
import { ProductCard } from "./ProductCard"
import styled from "styled-components"

const List = styled.ul`
  margin: 4px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #333;
  padding: 0.5px;
`

const LI = styled.li`
  background-color: #fff;
  flex: 0 0 50%;
  flex-basis: calc(50% - 0.4px);
  height: 300px;
  padding: 0 8px;
  margin: 0 0.2px;
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
