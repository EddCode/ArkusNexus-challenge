<<<<<<< HEAD
import Layout from '../../shared/Layout'

const BaseLayout = () => {
=======
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

import Layout from '../../shared/Layout'
import withUser from '../../shared/components/WithUser'

const BaseLayout = ({ user }) => {
  if (user) {
    return <Navigate to='/' />
  }

>>>>>>> 7c3aff0 (features)
  return (
    <Layout background='bodyBackground'/>
  )
}

<<<<<<< HEAD
export default BaseLayout
=======
BaseLayout.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  })
}

const BaseLayoutWithUser = withUser(BaseLayout)

export default BaseLayoutWithUser
>>>>>>> 7c3aff0 (features)
