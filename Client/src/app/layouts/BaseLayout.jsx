import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

import Layout from '../../shared/Layout'
import withUser from '../../shared/components/WithUser'

const BaseLayout = ({ token }) => {
  if (token) {
    return <Navigate to='/' />
  }

  return (
    <Layout background='bodyBackground'/>
  )
}

BaseLayout.propTypes = {
  token: PropTypes.string
}

const BaseLayoutWithUser = withUser(BaseLayout)

export default BaseLayoutWithUser
