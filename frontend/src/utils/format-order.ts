
export interface Order {
    id: number;
    orderName: string;
    customerCompanyName: string;
    customerName: string;
    orderDate: string;
    deliveredAmount: number;
    totalAmount: number;
    productsNames: string[]
}

export const formatOrder = (data: { results: any[] }): Order[] => {
    return data.results.map((order, index) => {
        let deliveredAmount = 0
        let totalAmount = 0
        const productsNames: string[] = []
        order.items.forEach((item: any) => {
            const price_per_unit = item.price_per_unit
            productsNames.push(item.product)
            item.delivered.forEach((d: any) => {
                deliveredAmount += d.delivered_quantity

            })
            totalAmount = deliveredAmount * price_per_unit
        })

        const i: Order = {
            id: index,
            customerCompanyName: order.costumer.company.name,
            customerName: order.costumer.name,
            orderDate: order.created_at,
            orderName: order.order_name,
            deliveredAmount,
            totalAmount,
            productsNames
        }
        return i
    })
}