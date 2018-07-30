import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

import * as Theme from '../components/theme'

import './normalize.css'
import './site.css'

const Wrapper = styled.div`
  height: 100%;
`

const Inner = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100%;
`

const Layout = ({ children, data, location }) => (
  <Wrapper>
    <Helmet
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      defaultTitle={data.site.siteMetadata.title}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      ]}
    />
    <Navigation location={location} />
    <Inner
      style={{
        paddingTop:
          location !== '/' ? Theme.Sizes.NavigationHeight.Narrow : '0',
      }}
    >
      {children()}
      <Footer />
    </Inner>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
