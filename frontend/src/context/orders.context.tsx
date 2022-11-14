import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/order.service";
import { Order } from "../utils/format-order";

export const OrderContext = createContext<any>(undefined);

export const useOrderProvider = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      const orders = await getAll()
      if (orders.length) setOrders(orders)
    }
    fetchData()
  }, [])
  useEffect(() => {

    let tAmount = 0
    orders.forEach(order => {
      tAmount += order.totalAmount
    })
    setTotalAmount(tAmount)
  }, [orders])
  return {
    orders,
    setOrders,
    totalAmount
  };
};

export const ProviderOrder = ({ children }: { children: any }) => {
  const OrderCtx = useOrderProvider();
  return (
    <OrderContext.Provider value={OrderCtx}>
      {children}
    </OrderContext.Provider>
  );
};