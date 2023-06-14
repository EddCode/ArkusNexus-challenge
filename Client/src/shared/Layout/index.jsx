import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import Footer from '@/widgets/Footer'

import Root, { Container } from './layout.style'

<<<<<<< HEAD
const Layout = ({ navBar, sideBar, background, footerColorText }) => {
  return (
    <Root background={background}>
      {navBar}
      {sideBar}
      <Container>
        <Outlet />
      </Container>
      <Footer color={footerColorText}/>
=======
const Layout = ({ header, sideBar, background, footerColorText, footerColorLink }) => {
  return (
    <Root background={background} dashboard={sideBar ? 'true' : 'false'}>
      {sideBar}
      {header}
      <Container>
        <Outlet />
      </Container>
      <Footer color={footerColorText} colorLink={footerColorLink}/>
>>>>>>> 7c3aff0 (features)
    </Root>
  )
}

Layout.propTypes = {
<<<<<<< HEAD
  navBar: PropTypes.node,
  sideBar: PropTypes.node,
  background: PropTypes.string,
  footerColorText: PropTypes.string
=======
  header: PropTypes.node,
  sideBar: PropTypes.node,
  background: PropTypes.string,
  footerColorText: PropTypes.string,
  footerColorLink: PropTypes.string
>>>>>>> 7c3aff0 (features)
}

export default Layout
