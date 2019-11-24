import React from "react"
import Img from "gatsby-image"
export default function MobileCategory({ category }) {
  return (
    <li
      style={{
        display: "felx",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "0 3px",
        width: "112px",
        border: "1px solid rgb(234, 234, 236)",
        borderRadius: "4px",
        verticalAlign: "top",
      }}
    >
      <Img fixed={category.image.fixed} />
      <p
        style={{
          fontSize: "11px",
          fontWeight: 500,
          margin: 0,
          lineHeight: "11px",
        }}
      >
        {category.name}
      </p>
    </li>
  )
}
