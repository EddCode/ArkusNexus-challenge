import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import PropTypes from 'prop-types'

function Table ({ columns, data }) {
  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })

  return (
    <table>
      <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
              )}
            </tr>
          ))}
        </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table
