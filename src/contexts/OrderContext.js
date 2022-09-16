import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from 'aws-amplify'
import { Order, OrderItem, Basket } from '../models'
import { useBasketContext } from "./BasketContext";
import { useAuthContext } from "./AuthContext";

const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => 
{
    const { dbUser } = useAuthContext()
    const { dispo, totalPrice, basketItems, basket } = useBasketContext()

    const [orders, setOrders] = useState([])

    useEffect(() => 
    {
        DataStore.query(Order, o => o.userID("eq", dbUser.id)).then(setOrders)
    }, [dbUser])
    const createOrder = async () => 
    {
        // create order
        const newOrder = await DataStore.save(new Order({
                userID: dbUser.id,
                Dispo: dispo,
                status: 'NEW',
                total: totalPrice,
            }
        ))
        // add all basketItems to the order
        await Promise.all(
            basketItems.map(basketItem => 
                DataStore.save(
                    new OrderItem({
                quantity: basketItem.quantity,
                orderID: newOrder.id,
                Item: basketItem.Item
            }))))
        // delete basket
        await DataStore.delete(basket)

        setOrders([...orders, newOrder])
    }

    const getOrder = async (id) => 
    {
        const order = await DataStore.query(Order, id)
        const orderItems = await DataStore.query(OrderItem, (oi) => oi.orderID("eq", id))

        return {...order, items: orderItems}
    }

    return (
        <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)