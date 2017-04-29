'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/** Style for TheContainer */
const TheContainerStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-container-style', className) }
            styles={ TheContainerStyle.data(options) }
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
  const { ThemeValues } = TheStyle
  let {
    containerWidth = ThemeValues.containerWidth
  } = options
  return {
    '.the-container': {
      width: containerWidth,
      margin: '0 auto'
    }
  }
}

export default TheContainerStyle
