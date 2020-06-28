import React, { Component } from 'react'
import styled from 'styled-components'

import * as Theme from '../components/theme'

const Field = styled.div`
  padding-bottom: 2rem;
  position: relative;

  input:not(:focus):not(.fl-valid) {
    color: transparent;
  }

  input,
  label {
    box-sizing: border-box;
    font-size: 1.175rem;
    font-weight: 400;
    height: 2.25em;
    line-height: 1.5;
    outline: none;
    padding: calc(1.375em - 1px) calc(0.625em - 1px);
    -webkit-font-smoothing: antialiased;
  }

  input {
    align-items: center;
    background-color: ${Theme.Colors.Grey.White};
    border: 1px solid ${Theme.Colors.Grey.Base};
    border-radius: 4px;
    box-shadow: inset 0 2px 4px 0 ${Theme.Colors.Grey.Lighter};
    color: ${Theme.Colors.Grey.Darkest};
    width: 100%;

    &:hover {
      border-color: ${Theme.Colors.Primary.Dark};
    }

    &:active {
      border-color: ${Theme.Colors.Primary.Base};
    }

    &:focus {
      box-shadow: 0 0 0 0.125em ${Theme.Colors.Primary.Base};
    }
  }

  label {
    align-content: center;
    color: ${Theme.Colors.Grey.Darker};
    display: grid;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform-origin: top left;
    transition: 200ms ease all;
  }

  input:focus + label,
  input.fl-valid + label {
    color: ${Theme.Colors.Primary.Dark};
    transform: scale(0.7) translate3d(0, -0.7rem, 0);
  }
`

class input extends Component {
  constructor(props) {
    super(props)
    this.state = { hasValue: false }
  }

  onChange = event => {
    this.setState({
      hasValue: Boolean(event.currentTarget.value),
    })
  }

  render() {
    const { type, name, label, id } = this.props
    const { hasValue } = this.state

    if (type === 'hidden') return <input id={id} type={type} name={name} />
    return (
      <Field>
        <input
          id={id}
          type={type}
          name={name}
          className={hasValue ? 'fl-valid' : ''}
          onChange={this.onChange}
        />
        <label htmlFor={id}>{label}</label>
      </Field>
    )
  }
}

export default input
