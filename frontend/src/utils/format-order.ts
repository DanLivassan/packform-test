
export interface Order {
    orderName: string;
    customerCompanyName: string;
    customerName: string;
    orderDate: string;
    deliveredAmount: number;
    totalAmount: number
}

export const formatOrder = (data: { results: any[] }): Order[] => {
    return data.results.map(order => {
        let deliveredAmount = 0
        let totalAmount = 0
        order.items.forEach((item: any) => {
            const price_per_unit = item.price_per_unit
            item.delivered.forEach((d: any) => {
                deliveredAmount += d.delivered_quantity

            })
            totalAmount = deliveredAmount * price_per_unit
        })

        const i: Order = {
            customerCompanyName: order.costumer.company.name,
            customerName: order.costumer.name,
            orderDate: order.created_at,
            orderName: order.order_name,
            deliveredAmount,
            totalAmount
        }
        return i
    })
}