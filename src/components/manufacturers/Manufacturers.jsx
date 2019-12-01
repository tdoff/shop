import React from "react"
import styled from "styled-components"
import { chunkArray } from "../../utils/responsive"
import { Link } from "gatsby"

const List = styled.ul`
  display: flex;
  width: 100%;
`

const LI = styled.li`
  flex: 0 0 33.3%;
  padding: 0 8px;
`

const Card = styled(Link)`
  box-shadow: 0px 7px 35px -13px rgba(0, 0, 0, 0.75);
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 120px;
  padding: 3px;
  padding-bottom: 10px;
`

const ImageWrapper = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 3px;
  align-items: center;
  flex: 1;
`

const Name = styled.p`
  font-size: 11px;
  font-weight: bolder;
  text-align: center;
`

export default function Manufacturers({ manufacturers }) {
  const chunkedManufacturer = chunkArray(manufacturers, 3)
  return chunkedManufacturer.map((row, idx) => (
    <List key={idx}>
      {row.map(manufacturer => (
        <LI key={manufacturer.id}>
          <Card to={`manufacturer/${manufacturer.name}`}>
            <ImageWrapper>
              <img
                width="100%"
                lazyloading="lazy"
                src={manufacturer.icon.fixed.src}
                alt={manufacturer.icon.title}
              />
            </ImageWrapper>
            <Name>{manufacturer.name}</Name>
          </Card>
        </LI>
      ))}
    </List>
  ))
}
