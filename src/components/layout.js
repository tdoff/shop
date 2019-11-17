/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useJsonForm } from 'gatsby-tinacms-json'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const dataQuery = useStaticQuery(graphql`
    query MyQuery {
      dataJson {
        header {
          title
        }
        rawJson
        fileRelativePath
      }
    }
  `)

  const [data] = useJsonForm(dataQuery.dataJson, FormOptions);

  return (
    <>
      <Header siteTitle={data.header.title} />
      <main>{children}</main>
      <footer>
        footer
      </footer>
    </>
  )
}

const FormOptions = {
  fields: [
    {
      label: "Header title",
      name: "rawJson.header.title",
      description: 'Title of header',
      component: "text",
    },
  ],
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
