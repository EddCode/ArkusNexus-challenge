import styled from 'styled-components'
import propTypes from 'prop-types'

import { Link } from 'react-router-dom'

const textColor = {
  white: 'var(--white)',
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  gray: 'var(--gray-color)',
  lightGray: 'var(--light-gray)'
}

const FooterStyle = styled.footer`
  & p {
    text-align: center;
    font-size: .8rem;
    color: ${props => textColor[props.color] || 'var(--white)'};
    font-weight: 400;

    & a {
      color: ${props => textColor[props.colorLink] || 'var(--second-color)'};
      font-size: .8rem;
      text-decoration: none;
      font-weight: 700;
    }
  }
`

const Footer = ({ color, colorLink }) => {
  return (
    <FooterStyle color={color} colorLink={colorLink}>
      <p>
        Powered by Mind {' '}
        <Link to="https://www.mindhub.mx/" target='_new'>@Mind Group 2023</Link>
      </p>
    </FooterStyle>
  )
}

Footer.propTypes = {
  color: propTypes.string,
  colorLink: propTypes.string
}

export default Footer
