import React from "react"
import MobileCategory from "./MobileCategory"

export default function MobileNav({ categories }) {
  return (
    <div style={{ padding: "8px" }}>
      <ul style={{ display: "flex", overflowX: "auto" }}>
        {categories.map(category => (
          <MobileCategory key={category.id} category={category} />
        ))}
      </ul>
    </div>
  )
}
