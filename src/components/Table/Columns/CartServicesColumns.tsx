import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {
  PriceRangeCell,
  DeleteServiceCell,
  NameModalCell,
} from '../Cells/TableCells';

const cartTableColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Service Name',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <NameModalCell props={params} />
    ),
  },
  {
    field: 'price',
    headerName: 'Price Range (small | medium | large)',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <PriceRangeCell props={params} />
    ),
  },
  { field: 'duration', headerName: 'Service Duration', flex: 1 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <DeleteServiceCell props={params} />
    ),
  },
];

export default cartTableColumns;
