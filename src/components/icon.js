import React, { Component } from 'react'

import '../layouts/fontawesome/css/fontawesome.min.css'
import '../layouts/fontawesome/css/light.min.css'

class icon extends Component {
  render() {
    const { icon, size } = this.props
    return <i className={`fal fa-fw fa-${icon} fa-${size}x`} />
  }
}

export default icon
