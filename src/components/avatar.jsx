import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Avatar = ({ size, src, className, style, ...props }) => (
  <div
    {...props}
    className={classNames([
      className, 'avatar',
      { [`display-${size}`]: size }
    ])}
    style={{
      ...style,
      backgroundImage: `url(${src})`
    }}
  />
)

Avatar.propTypes = {
  size: PropTypes.oneOf([
    'small', 'large'
  ])
}

export default Avatar
