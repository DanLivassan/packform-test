import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/order.service";
import { Order } from "../utils/format-order";

export const OrderContext = createContext<any>(undefined);

export const useOrderProvider = () => {
  const [orders, setOrders] = useState<Order[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const orders = await getAll()
      if (orders.length) setOrders(orders)
    }
    fetchData()
  }, [])
  return {
    orders,
    setOrders,
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