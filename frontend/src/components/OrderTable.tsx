

import { Order } from '../utils/format-order';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

interface IProps {
    orders: Order[]
}

const OrderTable = ({ orders }: IProps) => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'orderName',
            headerName: 'Order Name',
            width: 150,
            editable: false,
        },
        {
            field: 'customerCompanyName',
            headerName: 'Company Name',
            width: 150,
            editable: false,
        },
        {
            field: 'customerName',
            headerName: 'Customer Name',
            width: 110,
            editable: false,
        },
        {
            field: 'orderDate',
            headerName: 'Order Date',
            width: 110,
            editable: false,
        },
        {
            field: 'deliveredAmount',
            headerName: 'Delivered',
            width: 110,
            editable: false,
        }
        ,
        {
            field: 'totalAmount',
            headerName: 'Total Amount',
            width: 110,
            editable: false,
        }


    ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={orders}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default OrderTable