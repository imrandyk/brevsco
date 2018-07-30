import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Navigation from './navigation'

import * as Theme from './theme'

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};
`

export default ({ html }) => {
  return <ContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
}
