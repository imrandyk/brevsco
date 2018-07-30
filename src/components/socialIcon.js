import React from 'react'
import styled from 'styled-components'

import IconBrand from './iconBrand'

import * as Theme from './theme'

export default ({ icon, link, color }) => {
  const SocialWrapper = styled.span`
    display: inline-block;
    margin-right: 0.375rem;

    a {
      color: ${Theme.Black};
      transition: ${Theme.Transition};

      &:hover {
        color: ${color};
      }
    }
  `

  return (
    <SocialWrapper>
      <a href={link}>
        <IconBrand icon={icon} size="2" />
      </a>
    </SocialWrapper>
  )
}
