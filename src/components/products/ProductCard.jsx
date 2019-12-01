import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4px;
`
const ImageList = styled.ul`
  display: flex;
  flex: 0 0 80%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`
const ImageItem = styled.li`
  flex: 0 0 100%;
  scroll-snap-align: center;
`

const ProductName = styled.p`
  opacity: 0.6;
  padding-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 11px;
  font-weight: 400;
  text-align: left;
  color: #282c3f;
`

export const ProductCard = ({ product }) => {
  return (
    <Wrapper to={`product/${product.name}`}>
      <ImageList>
        {product.images.map(img => (
          <ImageItem key={img.id}>
            <img
              loading="lazy"
              width="100%"
              src={img.fixed.src}
              alt={img.title}
            />
          </ImageItem>
        ))}
      </ImageList>
      <ProductName>{product.name}</ProductName>
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
