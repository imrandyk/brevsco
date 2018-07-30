import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import * as Theme from './theme'

const HeroImageWrapper = styled.div`
  position: relative;

  img {
    object-position: top center !important;
  }

  .text {
    display: grid;
    min-height: 100%;

    h1 {
      color: ${Theme.White};
      position: relative;
      text-align: center;
      align-self: center;
    }
  }
`

export default ({ imageSharp, headerText, headerHeight, padding }) => {
  const height = headerHeight != null ? headerHeight : Theme.HeaderHeight
  const pad = padding ? padding : 0
  let hero = (
    <HeroImageWrapper>
      <div className="text">
        <h1 style={{ color: Theme.Black }}>{headerText}</h1>
      </div>
    </HeroImageWrapper>
  )
  if (imageSharp != null) {
    hero = (
      <HeroImageWrapper style={{ height: height }}>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: height,
            width: '100%',
            zIndex: 0,
          }}
          sizes={imageSharp.sizes}
        />
        <div className="text">
          <h1>{headerText}</h1>
        </div>
      </HeroImageWrapper>
    )
  }

  return <div style={{ paddingTop: pad }}>{hero}</div>
}
