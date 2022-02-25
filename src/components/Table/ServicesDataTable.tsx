import React, { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { customTableProps } from '../../../utils/types';

const ServicesDataTable: FC<customTableProps> = ({
  cartItemsArray,
  columns,
}) => {
  return (
    <DataGrid
      rows={cartItemsArray}
      columns={columns}
      hideFooter={true}
      sx={{
        border: 'none',
        borderRadius: 0,
        height: 400,
        width: '100%',
        '& .MuiDataGrid-cell': {
          color: 'dimgray',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export default ServicesDataTable;
