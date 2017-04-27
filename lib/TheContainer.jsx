'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheContainerStyle from './TheContainerStyle'
import { htmlAttributesFor } from 'the-component-util'

/**
 * Container of the-components
 */
class TheContainer extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <div { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
           className={ classnames('the-container', className) }
      >
        { children }
      </div>
    )
  }

}

TheContainer.propTypes = {}

TheContainer.defaultProps = {}

TheContainer.displayName = 'TheContainer'

export default TheContainer
