import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { isMobile } from "react-device-detect"
import MobileNav from "./MobileNav"

export default function Categories() {
  const data = useStaticQuery(graphql`
    {
      allContentfulCategory {
        nodes {
          name
          image {
            fixed(height: 44, width: 100) {
              ...GatsbyContentfulFixed
            }
          }
          id
        }
      }
    }
  `)

  if (isMobile)
    return <MobileNav categories={data.allContentfulCategory.nodes} />
  return <p>Sorry support mobile only for now</p>
}
