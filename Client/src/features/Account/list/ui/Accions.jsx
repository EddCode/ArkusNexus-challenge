import PropTypes from 'prop-types'
import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { CoulumnAccions } from './Accounts.styles'
import { useAccountCtx } from '@/app/context/accounts'

function TableAccions ({ id }) {
  const { setAccount, account } = useAccountCtx()

  const handleDelete = async _ => {
    try {
      await fetch(`http://localhost:8080/api/v1/accounts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
        },
        method: 'DELETE'
      })
      setAccount(account.filter(item => item.id !== id))
    } catch (e) {
      console.log(e)
    }
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
