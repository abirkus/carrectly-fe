import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { PriceRangeCell, DeleteServiceCell } from '../Cells/TableCells';

const cartTableColumns: GridColDef[] = [
  { field: 'name', headerName: 'Service', flex: 3 },
  {
    field: 'price',
    headerName: 'Price Range (small | medium | large)',
    flex: 2,
    renderCell: (params: GridRenderCellParams) => (
      <PriceRangeCell row={params.row} />
    ),
  },
  { field: 'duration', headerName: 'Service Duration', flex: 2 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <DeleteServiceCell row={params.row} />
    ),
  },
];

export default cartTableColumns;
