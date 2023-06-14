import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import Footer from '@/widgets/Footer'

import Root, { Container } from './layout.style'

const Layout = ({ header, sideBar, background, footerColorText, footerColorLink }) => {
  return (
    <Root background={background} dashboard={sideBar ? 'true' : 'false'}>
      {sideBar}
      {header}
      <Container>
        <Outlet />
      </Container>
      <Footer color={footerColorText} colorLink={footerColorLink}/>
    </Root>
  )
}

Layout.propTypes = {
  header: PropTypes.node,
  sideBar: PropTypes.node,
  background: PropTypes.string,
  footerColorText: PropTypes.string,
  footerColorLink: PropTypes.string
}

export default Layout
