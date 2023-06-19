import { createColumnHelper } from '@tanstack/react-table'
import AccionColumns from '../../create/ui/AccionColumn'

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
    cell: info => <AccionColumns info={info}/>,
    header: () => 'Accions'
  })
]

export default userTable
