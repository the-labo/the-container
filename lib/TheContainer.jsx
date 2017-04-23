'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'

/**
 * Container of the-components
 */
class TheContainer extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      id,
      className,
      styles,
      children
    } = props
    return (
      <div className={ classnames('the-container', className) }
           style={ styles.root }
           { ...{ id }}
      >
        { children }
      </div>
    )
  }

  /**
   * Define style
   * @param [options={}] options - Optional settings
   * @returns {Object} Style object
   */
  static styles (options = {}) {
    const { theme } = TheStyle
    let {
      maxWidth = theme.CONTAINER_WIDTH
    } = options
    return {
      root: {
        maxWidth,
        margin: '0 auto'
      }
    }
  }
}

TheContainer.propTypes = {
  /** CSS class name */
  className: PropTypes.string,
  /** Style objects */
  styles: PropTypes.object,
  /** DOM Id */
  id: PropTypes.string
}

TheContainer.defaultProps = {
  className: null,
  styles: TheContainer.styles({}),
  id: null
}

TheContainer.displayName = 'TheContainer'

export default TheContainer
