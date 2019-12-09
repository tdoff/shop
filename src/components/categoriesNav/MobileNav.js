import React from "react"
import MobileCategory from "./MobileCategory"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 6px;
`

const List = styled.ul`
  padding: 2px 0;
  display: flex;
  overflow-x: auto;
`

export default function MobileNav({ categories }) {
  return (
    <Wrapper>
      <List>
        {categories.map(category => (
          <MobileCategory key={category.id} category={category} />
        ))}
      </List>
    </Wrapper>
  )
}
