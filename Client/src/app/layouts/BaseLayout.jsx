import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

import Layout from '../../shared/Layout'
import withUser from '../../shared/components/WithUser'

const BaseLayout = ({ user }) => {
  if (user) {
    return <Navigate to='/' />
  }

  return (
    <Layout background='bodyBackground'/>
  )
}

BaseLayout.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  })
}

const BaseLayoutWithUser = withUser(BaseLayout)

export default BaseLayoutWithUser
