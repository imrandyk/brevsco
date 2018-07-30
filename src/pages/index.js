import React from 'react'
import styled from 'styled-components'

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
      <HeroImage
        imageSharp={data.headerImage}
        headerText="Simple, effective design for your small business."
        headerHeight="100vh"
      />
      <Section>
        <img src="http://via.placeholder.com/200x200" />
        <div>
          <p>
            Roof party mixtape polaroid small batch godard, distillery glossier
            chia copper mug kickstarter gentrify master cleanse taiyaki. Hell of
            hoodie swag salvia art party synth. Wayfarers chia food truck
            butcher pickled knausgaard kinfolk.
          </p>
        </div>
      </Section>
      <HeroImage imageSharp={data.sectionImage} />
      <NewsLetterForm />
    </HomeWrapper>
  )
}

export const query = graphql`
  query HomeQuery {
    headerImage: imageSharp(id: { regex: "/home.jpg/" }) {
      sizes(maxWidth: 1240, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionImage: imageSharp(id: { regex: "/about.jpg/" }) {
      sizes(maxWidth: 1240, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
