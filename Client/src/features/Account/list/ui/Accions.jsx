import PropTypes from 'prop-types'
import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CoulumnAccions } from './Accounts.styles'

function TableAccions ({ id }) {
  const handleDelete = id => {
    fetch(`http://localhost:8080/api/v1/accounts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
      },
      method: 'DELETE'
    }).then(_res => location.reload()).catch(error => console.error('Error:', error))
  }

  return (
    <CoulumnAccions>
      <Link to={`/accounts/${id}`}>Details</Link>
      <VscTrash onClick={handleDelete} />
    </CoulumnAccions>
  )
}

TableAccions.propTypes = {
  id: PropTypes.number
}

export default TableAccions
