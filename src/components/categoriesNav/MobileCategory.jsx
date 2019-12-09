import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 3px;
  width: 112px;
  border: 1px solid rgb(234, 234, 236);
  border-radius: 4px;
  vertical-align: top;
`

const P = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin: 0;
  line-height: "11px";
`

export default function MobileCategory({ category }) {
  return (
    <Item className="paper">
      <Link to={`/category/${category.name}`}>
        <Img fixed={category.image.fixed} />
        <P>{category.name}</P>
      </Link>
    </Item>
  )
}
