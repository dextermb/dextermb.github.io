import React from 'react'

import Strong from './programming/strong'
import Usable from './programming/usable'
import Weak from './programming/weak'

export default () => (
  <div>
    <h2>Programming</h2>
    <div className={'flex flex-no-basis flex-space-between flex-top'}>
      <Strong />
      <Usable />
      <Weak />
    </div>
  </div>
)
