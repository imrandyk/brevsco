import React from 'react'
import styled from 'styled-components'

import * as Theme from './theme'

import SocialIcon from './socialIcon'

const FooterWrapper = styled.div`
    background-color: ${Theme.Primary}
    height: 125px;

    .inner {
        align-items: center
        display: grid;
        grid-template-columns: 1fr auto;
        height: 100%;
        margin: 0 auto;
        max-width: 650px;
    }
`

export default () => {
  return (
    <FooterWrapper>
      <div className="inner">
        <div>&copy; Brevs.co All Rights Reserved</div>
        <div>
          <SocialIcon
            icon="twitter"
            link="https://twitter.com"
            color="#326ada"
          />
          <SocialIcon
            icon="facebook-f"
            link="https://facebook.com"
            color="#3b5998"
          />
          <SocialIcon
            icon="instagram"
            link="https://instagram.com"
            color="#d6249f"
          />
        </div>
      </div>
    </FooterWrapper>
  )
}
