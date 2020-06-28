import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from '../components/icon'
import * as Theme from '../components/theme'

const Wrapper = styled.div`
  position: relative;

  input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    visibility: hidden;

    &:checked ~ div {
      background-color: ${Theme.Colors.Success.Base};
      border-color: ${Theme.Colors.Success.Dark};

      i {
        color: ${Theme.Colors.Success.Lightest};
      }

      label {
        color: ${Theme.Colors.Grey.White};
      }
    }
  }

  div {
    align-items: center;
    background-color: ${Theme.Colors.Grey.White};
    border: 1px solid ${Theme.Colors.Grey.Base};
    border-radius: 4px;
    box-shadow: 0 4px 6px 0 ${Theme.Colors.Grey.Lighter};
    box-sizing: border-box;
    cursor: pointer;
    display: grid;
    font-size: 1.175rem;
    font-weight: 400;
    height: 100%;
    line-height: 1.5;
    outline: none;
    text-align: center;

    &:hover {
      border-color: ${Theme.Colors.Primary.Dark};
    }

    i {
      position: absolute;
      right: 0.1em;
      top: 0.3em;

      &.bg {
        color: ${Theme.Colors.Grey.Light};
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        z-index: 0;
      }
    }

    label {
      cursor: pointer;
      z-index: 2;
    }
  }
`

class CheckCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isChecked: false }
  }

  onClick = () => {
    const { isChecked } = this.state
    this.setState({
      isChecked: !isChecked,
    })
  }

  render() {
    const { name, label, id, value, icon } = this.props
    const { isChecked } = this.state
    return (
      <Wrapper onClick={this.onClick}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={isChecked}
        />
        <div>
          <Icon icon={isChecked ? 'badge-check' : ''} />
          <label htmlFor={id}>{label}</label>
          <Icon icon={icon} size="5" extraClassList="bg" />
        </div>
      </Wrapper>
    )
  }
}

export default CheckCard
