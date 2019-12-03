import React from "react"
import styled from "styled-components"

const ImageList = styled.ul`
  display: flex;
  flex: 0 0 80%;
  overflow-x: auto;
  background-color: #fff;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`
const ImageItem = styled.li`
  flex: 0 0 100%;
  scroll-snap-align: center;
`

export default function ImageCarousel({ images }) {
  return (
    <ImageList>
      {images.map(img => (
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
  )
}
