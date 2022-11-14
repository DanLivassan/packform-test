import { Box, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useOrderProvider } from "../context/orders.context"
import OrderTable from "./OrderTable"

export const OrderPanel = () => {
    const { orders, totalAmount } = useOrderProvider()
    const [searchText, setSearchText] = useState('')
    const [nOrders, setNOrders] = useState(orders)
    useEffect(() => {
        if (searchText.length === 0) setNOrders(orders)
        else {
            const nO = orders.filter(order => {

                if (order.orderName.toLowerCase().includes(searchText.toLocaleLowerCase())) return true
                return order.productsNames.some(pName => pName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            })
            setNOrders(nO)
        }
    }, [searchText, orders])
    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Box>Total amount: ${Math.round(totalAmount * 100) / 100}</Box>
            <TextField id="outlined-basic" label="Search..." variant="outlined" value={searchText} onChange={e => {
                setSearchText(e.target.value)
            }} />
        </Box>


        <OrderTable orders={nOrders}></OrderTable>
    </>
}