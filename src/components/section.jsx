import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Section = ({ content, children, className, ...props }) => (
  <div
    {...props}
    className={classNames([
      className, 'section'
    ])}
  >
    {content || children }
  </div>
)

Section.propTypes = {
  content: PropTypes.node
}

export default Section
