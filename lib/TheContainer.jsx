'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheContainerStyle from './TheContainerStyle'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Container of the-components
 */
class TheContainer extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      children
    } = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           className={c('the-container', className)}
      >
        {children}
      </div>
    )
  }

}

TheContainer.Style = TheContainerStyle

TheContainer.propTypes = {}

TheContainer.defaultProps = {}

TheContainer.displayName = 'TheContainer'

export default TheContainer
