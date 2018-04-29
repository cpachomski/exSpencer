import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  raised: PropTypes.boolean,
  accent: PropTypes.oneOf('primary', 'secondary', 'tertiary')
}

const Button = ({ raised, accent }) => {
  const buttonClass = cx({
    raised: raised,
    primary: accent === 'primary',
    secondary: accent === 'secondary',
    tertiary: accent === 'tertiary'
  })
  return <div className={buttonClass} />
}

Button.propTypes = propTypes

export default Button
