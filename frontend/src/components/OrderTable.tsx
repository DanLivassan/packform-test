import { data } from "../data/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
interface Order {
    orderName: string;
    customerCompanyName: string;
    customerName: string;
    orderDate: string;
    deliveredAmount: number;
    totalAmount: number
}



export default function OrderTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order name</TableCell>
                        <TableCell align="right">Company name</TableCell>
                        <TableCell align="right">Costumer Name</TableCell>
                        <TableCell align="right">Order date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.results.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.order_name}
                            </TableCell>
                            <TableCell align="right">{row.costumer.company.name}</TableCell>
                            <TableCell align="right">{row.costumer.name}</TableCell>
                            <TableCell align="right">{row.created_at}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}