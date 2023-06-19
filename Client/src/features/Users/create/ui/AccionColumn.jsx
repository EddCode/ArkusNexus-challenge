import PropTypes from 'prop-types'
import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Accions from './Accions.styles'

import { useUserCtx } from '@/app/context/user'

function AccionColumns ({ info }) {
  const { user, setUser } = useUserCtx()

  const deleteUser = async () => {
    try {
      await fetch(`http://localhost:8080/api/v1/user/${info.getValue()}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        method: 'DELETE'
      })
      setUser(user.filter(item => item.id !== info.getValue()))
    } catch (error) {}
  }

  return (
    <Accions>
      <Link to={`/users/${info.getValue()}`}>Details</Link>
      <VscTrash onClick={deleteUser}/>
    </Accions>
  )
}

AccionColumns.propTypes = {
  info: PropTypes.object
}

export default AccionColumns
