import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import ImageCarousel from "../ImageCarousel"
import CurrencyLabel from "../CurrencyLabel"

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4px;
`

const ProductName = styled.p`
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 11px;
  font-weight: 400;
  text-align: left;
  color: #282c3f;
`

const Price = styled.p`
  font-weight: 600;
  color: #282c3f;
  font-size: 14px;
  margin-top: 6px;
  svg {
    height: 13px;
  }
`

export const ProductCard = ({ product }) => {
  return (
    <Wrapper to={`product/${product.name}`}>
      <ImageCarousel images={product.images} />
      <ProductName>{product.name}</ProductName>
      <Price>
        <CurrencyLabel />
        <span>{product.pricePoint}</span>
      </Price>
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
