import React from 'react'
import styled from 'styled-components'

import Icon from './icon'

import * as Theme from './theme'

const Button = styled.button`
  align-items: center;
  background-color: ${Theme.Colors.Primary.Base};
  border: 1px solid ${Theme.Colors.Primary.Dark};
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 ${Theme.Colors.Grey.Lighter};
  color: ${Theme.Colors.Grey.Black};
  cursor: pointer;
  font-size: 1.175rem;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  position: relative;

  &:hover {
    background-color: ${Theme.Colors.Primary.Light};
    border-color: ${Theme.Colors.Primary.Base};
  }

  &:active {
    border-color: ${Theme.Colors.Primary.Base};
  }

  &:focus {
    box-shadow: 0 0 0 0.125em ${Theme.Colors.Primary.Base};
  }
`

export default ({ text, icon, type }) => {
  if (!icon) return <Button type={type}>{text}</Button>
  else
    return (
      <Button type={type}>
        <Icon icon={icon} /> {text}
      </Button>
    )
}
