import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'

import * as Theme from './theme'

import logoBlack from '../images/logo_black.png'
import logoWhite from '../images/logo_white.png'

const Container = styled.div`
  left: 0;
  position: fixed;
  width: 100%;
  transition: ${Theme.Transition};
  top: 0;
  z-index: 9;
`

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    'link1 link1 logo link3 link3'
    'link2 link2 logo link4 link4';
  justify-items: center;
  height: ${Theme.Sizes.NavigationHeight};
  transition: ${Theme.Transition};

  img {
    transition: ${Theme.Transition};
  }

  .page {
    align-items: center;
    color: ${Theme.White};
    display: grid;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${Theme.Transition};
    width: 100%;
    z-index: 1;
  }

  & :hover {
    color: ${Theme.Black};
  }

  .page-1 {
    grid-area: logo;
  }

  .page-2 {
    grid-area: link1;
  }

  .page-3 {
    grid-area: link2;
  }

  .page-4 {
    grid-area: link3;
  }

  .page-5 {
    grid-area: link4;
  }

  @media (min-width: 768px) {
    grid-template-areas: 'link1 link2 logo link3 link4';
  }
`

class navigation extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { location } = this.props

    if (location.pathname !== '/') return

    const target =
      window.pageYOffset >
      Theme.Sizes.NavigationHeight.Normal.replace(/\D/g, '')

    this.container.style.backgroundColor = target
      ? Theme.Primary
      : 'transparent'
    this.wrapper.style.height = target
      ? Theme.Sizes.NavigationHeight.Narrow
      : Theme.Sizes.NavigationHeight.Normal
    this.logo.style.height = target
      ? Theme.Sizes.LogoHeight.Narrow
      : Theme.Sizes.LogoHeight.Normal
  }

  render() {
    const { location } = this.props

    const isHome = location.pathname === '/'

    return (
      <Container
        ref={container => (this.container = ReactDOM.findDOMNode(container))}
        style={{ backgroundColor: isHome ? 'transparent' : Theme.Primary }}
      >
        <NavWrapper
          ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
          style={{
            height: isHome
              ? Theme.Sizes.NavigationHeight.Normal
              : Theme.Sizes.NavigationHeight.Narrow,
          }}
        >
          <Link className="page page-1" to="/">
            <img
              src={logoWhite}
              style={{
                height: isHome
                  ? Theme.Sizes.LogoHeight.Normal
                  : Theme.Sizes.LogoHeight.Narrow,
              }}
              ref={logo => (this.logo = ReactDOM.findDOMNode(logo))}
            />
          </Link>
          <Link className="page page-2" to="/">
            Home
          </Link>
          <Link className="page page-3" to="/about">
            About
          </Link>
          <Link className="page page-4" to="/">
            Hire Us
          </Link>
          <Link className="page page-5" to="/">
            Services
          </Link>
        </NavWrapper>
      </Container>
    )
  }
}

export default navigation
