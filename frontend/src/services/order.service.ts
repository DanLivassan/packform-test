import { formatOrder, Order } from "../utils/format-order"
import { api } from "./api"

export const getAll = async (): Promise<Order[]> => {
    const rawOrders = await api.get('/orders/')
    return formatOrder(rawOrders.data as any)
}