import { createColumnHelper } from '@tanstack/react-table'
import TableAccions from '../ui/Accions'

const columnHelper = createColumnHelper()
const accountTable = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    header: () => 'Account Name'
  }),
  columnHelper.accessor('client', {
    cell: info => info.getValue(),
    header: () => 'Client Name'
  }),
  columnHelper.accessor('responsable', {
    cell: info => info.getValue(),
    header: 'Responsable'
  }),
  columnHelper.accessor('id', {
    cell: info => (<TableAccions id={info.getValue()} />),
    header: () => 'Accions'
  })
]

export default accountTable
