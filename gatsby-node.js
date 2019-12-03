/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // #region QUERY
  // filter out categories with empty manufacturer
  const result = await graphql(
    `
      {
        allContentfulCategory(
          filter: { manufacturers: { elemMatch: { id: { ne: null } } } }
        ) {
          nodes {
            id
            name
            manufacturers {
              id
              name
              countryName
              icon {
                title
                fixed {
                  src
                }
              }
            }
          }
        }
        allContentfulManufacturer(
          filter: { product: { elemMatch: { id: { ne: null } } } }
        ) {
          nodes {
            name
            product {
              id
              name
              pricePoint
              hasDiscount
              images {
                title
                fixed {
                  src
                }
              }
            }
          }
        }
        allContentfulProduct {
          nodes {
            id
            name
            pricePoint
            hasDiscount
            images {
              title
              fixed {
                src
              }
            }
            description {
              json
            }
          }
        }
      }
    `
  )

  // #endregion QUERY
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categories = result.data.allContentfulCategory.nodes
  const manufacturers = result.data.allContentfulManufacturer.nodes
  const products = result.data.allContentfulProduct.nodes

  // #region CATEGORIES
  const categoryDetailsTemplate = path.resolve(
    `src/templates/categoryDetails.js`
  )
  categories.forEach(category => {
    const path = `category/${category.name}`
    createPage({
      path,
      component: categoryDetailsTemplate,
      context: {
        path,
        category,
      },
    })
  })
  // #endregion CATEGORIES

  // #region MANUFACTURER
  const manufacturerDetailsTemplate = path.resolve(
    `src/templates/manufacturerDetails.js`
  )
  manufacturers.forEach(manufacturer => {
    const path = `manufacturer/${manufacturer.name}`
    createPage({
      path,
      component: manufacturerDetailsTemplate,
      context: manufacturer,
    })
  })
  // #endregion MANUFACTURER

  // #region PRODUCT
  const productDetailsTemplate = path.resolve(`src/templates/productDetails.js`)
  products.forEach(product => {
    const path = `product/${product.name}`
    createPage({
      path,
      component: productDetailsTemplate,
      context: product,
    })
  })
  // #endregion PRODUCT
}
