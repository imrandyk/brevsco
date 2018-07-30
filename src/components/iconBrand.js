import React, { Component } from 'react'

import '../layouts/fontawesome/css/fontawesome.min.css'
import '../layouts/fontawesome/css/brands.min.css'

class iconBrand extends Component {
  render() {
    const { icon, size } = this.props
    return <i className={`fab fa-fw fa-${icon} fa-${size}x`} />
  }
}

export default iconBrand
