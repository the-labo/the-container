'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import { TheStyle } from 'the-style'

/** Style for TheContainer */
const TheContainerStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-container-style', className)}
            styles={TheContainerStyle.data(options)}
  />
)

TheContainerStyle.displayName = 'TheContainerStyle'
TheContainerStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheContainerStyle.defaultProps = {
  options: {}
}

TheContainerStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    containerWidth = ThemeValues.containerWidth
  } = options
  return {
    '.the-container': {
      maxWidth: containerWidth,
      margin: '0 auto'
    }
  }
}

export default TheContainerStyle
