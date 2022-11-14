
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Order } from '../utils/format-order';


interface IProps {
    orders: Order[]
}
const OrderTable = ({ orders }: IProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order name</TableCell>
                        <TableCell align="right">Company name</TableCell>
                        <TableCell align="right">Costumer Name</TableCell>
                        <TableCell align="right">Order date</TableCell>
                        <TableCell align="right">Total Amount</TableCell>
                        <TableCell align="right">Delivered Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row, id) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.orderName}
                            </TableCell>
                            <TableCell align="right">{row.customerCompanyName}</TableCell>
                            <TableCell align="right">{row.customerName}</TableCell>
                            <TableCell align="right">{row.orderDate}</TableCell>
                            <TableCell align="right">{Math.round(row.totalAmount * 100) / 100}</TableCell>
                            <TableCell align="right">{row.deliveredAmount ? row.deliveredAmount : '-'}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default OrderTable