import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()
const userTable = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: 'First Name'
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
  })
]

export default userTable
