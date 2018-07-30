import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import * as Theme from '../components/theme'

const Section = styled.div`
  margin: 2rem auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};
`

export default () => {
  return (
    <div>
      <Helmet title="Thank you" />
      <Section>Thank you for joining our newsletter.</Section>
    </div>
  )
}
