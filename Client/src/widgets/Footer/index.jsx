import styled from 'styled-components'
import propTypes from 'prop-types'

import { Link } from 'react-router-dom'

const textColor = {
  white: 'var(--white)',
  primary: 'var(--primary-color)',
<<<<<<< HEAD
  secondary: 'var(--secondary-color)'
=======
  secondary: 'var(--secondary-color)',
  gray: 'var(--gray-color)',
  lightGray: 'var(--light-gray)'
>>>>>>> 7c3aff0 (features)
}

const FooterStyle = styled.footer`
  & p {
    text-align: center;
<<<<<<< HEAD
    color: ${props => textColor[props.color] || 'var(--white)'};

    & a {
      color: ${props => textColor[props.color] || 'var(--second-color)'};
      text-decoration: none;
=======
    font-size: .8rem;
    color: ${props => textColor[props.color] || 'var(--white)'};
    font-weight: 400;

    & a {
      color: ${props => textColor[props.colorLink] || 'var(--second-color)'};
      font-size: .8rem;
      text-decoration: none;
      font-weight: 700;
>>>>>>> 7c3aff0 (features)
    }
  }
`

<<<<<<< HEAD
const Footer = ({ color }) => {
  return (
    <FooterStyle color={color}>
=======
const Footer = ({ color, colorLink }) => {
  return (
    <FooterStyle color={color} colorLink={colorLink}>
>>>>>>> 7c3aff0 (features)
      <p>
        Powered by Mind {' '}
        <Link to="https://www.mindhub.mx/" target='_new'>@Mind Group 2023</Link>
      </p>
    </FooterStyle>
  )
}

Footer.propTypes = {
<<<<<<< HEAD
  color: propTypes.string
=======
  color: propTypes.string,
  colorLink: propTypes.string
>>>>>>> 7c3aff0 (features)
}

export default Footer
