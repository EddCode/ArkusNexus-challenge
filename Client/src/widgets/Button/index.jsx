import PropTypes from 'prop-types'

import ButtonStyle from './button.style'

const Button = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>{ children }</ButtonStyle>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
