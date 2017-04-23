'use strict'

import React from 'react'
import TheContainer from 'the-container'

const TheContainerStyles = TheContainer.styles({})

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <TheContainer id='my-component'
                        styles={ TheContainerStyles }
      />
    )
  }
}

export default ExampleComponent
