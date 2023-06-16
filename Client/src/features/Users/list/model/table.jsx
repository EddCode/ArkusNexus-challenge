import { createColumnHelper } from '@tanstack/react-table'
import { VscTrash } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Accions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--error-color);

  & a {
    text-decoration: none;
    color: var(--second-color);
    cursor: pointer;
  }

  & svg {
    cursor: pointer;
  }
`

const columnHelper = createColumnHelper()
const userTable = [

  columnHelper.accessor('name', {
    cell: info => info.getValue()
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: () => 'Email'
  }),
  columnHelper.accessor('role', {
    cell: info => info.getValue(),
    header: 'Role'
  }),
  columnHelper.accessor('resume', {
    cell: info => info.getValue(),
    header: 'Resume Google link'
  }),
  columnHelper.accessor('skills', {
    cell: info => info.getValue(),
    header: 'Skills'
  }),
  columnHelper.accessor('englishLevel', {
    cell: info => info.getValue(),
    header: 'English level'
  }),
  columnHelper.accessor('id', {
    cell: info => (
      <Accions>
        <Link to={`/users/${info.getValue()}`}>Details</Link>
        <VscTrash onClick={() => {
          fetch(`http://localhost:8080/api/v1/user/${info.getValue()}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
            method: 'DELETE'
          }).then(_res => location.reload()).catch(error => console.error('Error:', error))
        }}/>
      </Accions>
    ),
    header: () => 'Accions'
  })
]

export default userTable
