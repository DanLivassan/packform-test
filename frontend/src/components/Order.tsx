import { useOrderProvider } from "../context/orders.context"
import OrderTable from "./OrderTable"

export const OrderPanel = () => {
    const { orders } = useOrderProvider()
    return <>
        <OrderTable orders={orders}></OrderTable>
    </>
}