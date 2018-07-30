import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import HeroImage from '../components/heroImage'
import NewsLetterForm from '../components/newsLetterForm'

import * as Theme from '../components/theme'

const HomeWrapper = styled.div``
const Section = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 3fr;
  margin: 2rem auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};
`

export default ({ data, location }) => {
  return (
    <HomeWrapper>
      <Helmet title="About" />
      <HeroImage imageSharp={data.headerImage} />
      <Section>
        <Img
          style={{
            height: '300px',
            width: '300px',
          }}
          sizes={data.sectionImage.sizes}
        />
        <div>
          <p>
            She's been designing, photographing, creating, and helping small
            business owners market and run their businesses for over 10 years.
            He's been behind the scenes building websites and wrangling ones and
            zeros for Oklahoma businesses, small and large, for over 15 years.
            Together they are bringing a new approach to web presence for small
            businesses. Focusing on simple and effective design we help your
            brand create a connection with your target customer, sending them
            straight to your contact page.
          </p>
        </div>
      </Section>
    </HomeWrapper>
  )
}

export const query = graphql`
  query AboutQuery {
    headerImage: imageSharp(id: { regex: "/about.jpg/" }) {
      sizes(maxWidth: 1240, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionImage: imageSharp(id: { regex: "/About-Image.jpg/" }) {
      sizes(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
