import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div``
const ImageList = styled.ul`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`
const ImageItem = styled.li`
  flex: 0 0 100%;
  scroll-snap-align: center;
`

export const ProductCard = ({ product }) => {
  return (
    <Wrapper>
      <ImageList>
        {product.images.map(img => (
          <ImageItem key={img.id}>
            <Img fluid={img.fluid} />
          </ImageItem>
        ))}
      </ImageList>
      <h2>{product.name}</h2>
      <p>{product.pricePoint}</p>
    </Wrapper>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        fluid: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    name: PropTypes.string.isRequired,
    pricePoint: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
}
