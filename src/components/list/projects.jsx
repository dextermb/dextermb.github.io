import React from 'react'

import Personal from './projects/personal'
import Contributions from './projects/contributions'
import Work from './projects/work'

export default () => (
  <div>
    <h2>Projects</h2>
    <div className={'flex flex-no-basis flex-top'}>
      <Personal />
      <Contributions />
      <Work />
    </div>
  </div>
)
