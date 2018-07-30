import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

import './normalize.css'
import './site.css'

const Wraper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`

const Layout = ({ children, data, location }) => (
  <Wraper>
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
    {children()}
    <Footer />
  </Wraper>
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
