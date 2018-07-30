import React from 'react'
import styled from 'styled-components'

import Icon from './icon'

import * as Theme from './theme'

const Button = styled.button`
  align-items: center;
  background-color: ${Theme.Primary};
  border: 1px solid ${Theme.PrimaryDarker};
  border-radius: 4px;
  color: rgb(54, 54, 54);
  cursor: pointer;
  font-size: 1.175rem;
  font-weight: 400;
  height: 100%;
  line-height: 1.5;
  outline: none;
  padding: calc(0.375em - 1px) calc(0.625em - 1px);
  position: relative;

  &:hover {
    background-color: ${Theme.PrimaryLighter};
    border-color: ${Theme.Primary};
  }

  &:active {
    border-color: ${Theme.Primary};
  }

  &:focus {
    box-shadow: 0 0 0 0.125em ${Theme.Primary};
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
