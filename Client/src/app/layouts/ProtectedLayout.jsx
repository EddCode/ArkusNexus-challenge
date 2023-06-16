import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import Layout from '../../shared/Layout'
import withUser from '../../shared/components/WithUser'
import Sidebar from '../../widgets/Sidebar'
import Header from '../../widgets/Header'

const DashboardLayout = ({ token }) => {
  if (!token) {
    return <Navigate to='/login' />
  }

  return (
    <Layout
      footerColorText='lightGray'
      sideBar={<Sidebar/>}
      header={<Header />}
    />
  )
}

DashboardLayout.propTypes = {
  token: PropTypes.string
}

const ProtectedLayout = withUser(DashboardLayout)

export default ProtectedLayout
