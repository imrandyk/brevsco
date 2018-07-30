import React from 'react'
import styled from 'styled-components'

import * as Theme from './theme'

import Button from './button'

const LetterWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  margin: 2rem auto;
  max-width: ${Theme.ContentMaxWidth};
  width: ${Theme.ContentWidth};

  input {
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(219, 219, 219);
    border-radius: 4px;
    box-shadow: rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset;
    color: rgb(54, 54, 54);
    font-size: 1.175rem;
    font-weight: 400;
    height: 2.25em;
    line-height: 1.5;
    outline: none;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    position: relative;

    &:hover {
      border-color: ${Theme.PrimaryDarker};
    }

    &:active {
      border-color: ${Theme.Primary};
    }

    &:focus {
      box-shadow: 0 0 0 0.125em ${Theme.Primary};
    }
  }
`

const Form = styled.form`
  display: grid;
  grid-gap: calc(0.625em - 1px);
  grid-template-columns: 1fr auto;
  width: 100%;
`

export default () => {
  return (
    <LetterWrapper>
      <h1>Join our News letter!</h1>
      <Form>
        <input type="email" placeholder="Enter your email" />
        <Button text="Subscribe" icon="paper-plane" size="1" />
      </Form>
    </LetterWrapper>
  )
}
