import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Wrapper = ({ content, children, wide, className, ...props }) => (
  <div
    {...props}
    className={classNames([
      className, 'wrapper',
      { 'display-wide': wide }
    ])}
  >
    {content || children }
  </div>
)

Wrapper.propTypes = {
  content: PropTypes.node,
  wide: PropTypes.bool
}

export default Wrapper
