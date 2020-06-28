import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Color from 'color'

import Button from '../components/button'
import Input from '../components/input'
import CheckCard from '../components/checkCard'
import HeroImage from '../components/heroImage'

import * as Theme from '../components/theme'

const Section = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};
`

const HelpWith = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 0.5em;
  min-height: 100%;
`

const Para = styled.p`
  margin: 2rem auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};
`

const Form = {
  Fields: [
    { type: 'hidden', name: 'form-name', value: 'newsletter', label: '' },
    { type: 'hidden', name: 'bot-field', value: '', label: '' },
    { type: 'text', name: 'firstname', value: '', label: 'First Name' },
    { type: 'text', name: 'lastname', value: '', label: 'Last Name' },
    { type: 'email', name: 'email', value: '', label: 'Email Address' },
    { type: 'text', name: 'businessname', value: '', label: 'Business Name' },
  ],
  Services: [
    { label: 'Branding - Digital', icon: 'desktop' },
    { label: 'Branding - Print', icon: 'newspaper' },
    { label: 'Websites', icon: 'browser' },
    { label: 'Social Media Marketing', icon: 'bullhorn' },
    { label: 'Product Photography', icon: 'camera-retro' },
  ],
}

class hireus extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Helmet title="Hire Us" />
        <HeroImage imageSharp={data.headerImage} headerText="Hire Us" />
        <Para>
          Whether it's a question about our favorite pizza or you're ready to
          dive into your next project with us, use the contact form below to get
          started with us!
        </Para>
        <form
          action="/success/"
          name="contactus"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Section>
            <div>
              {Form.Fields.map((field, i) => (
                <Input
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  label={field.label}
                  key={i}
                />
              ))}
              <textarea name="message" />
              <Button
                type="submit"
                text="Something Fun"
                icon="gamepad"
                size="1"
              />
            </div>
            <div>
              <HelpWith>
                <h2>What can we help you with?</h2>
                {Form.Services.map((service, i) => (
                  <CheckCard
                    type="checkbox"
                    name="chk_service[]"
                    value={service.label.toLocaleLowerCase().replace(' ', '')}
                    label={service.label}
                    key={i}
                    icon={service.icon}
                  />
                ))}
              </HelpWith>
            </div>
          </Section>
        </form>
      </div>
    )
  }
}

export default hireus

export const query = graphql`
  query HireUsQuery {
    headerImage: imageSharp(id: { regex: "/contact.jpg/" }) {
      sizes(maxWidth: 1240, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
