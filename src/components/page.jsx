import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Page = ({ content, children, className, ...props }) => (
  <div
    {...props}
    className={classNames([
      className, 'page'
    ])}
  >
    {content || children }
  </div>
)

Page.propTypes = {
  content: PropTypes.node
}

export default Page
