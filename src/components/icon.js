import React, { Component } from 'react'

import '../layouts/fontawesome/css/fontawesome.min.css'
import '../layouts/fontawesome/css/light.min.css'

class icon extends Component {
  render() {
    const { icon, size, extraClassList } = this.props
    return <i className={`fal fa-fw ${(icon !== undefined ? 'fa-'+icon : '')} ${(size !== undefined ? 'fa-'+size+'x' : '')} ${(extraClassList !== undefined ? extraClassList : '')}`} />
  }
}

export default icon
