import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from 'aws-amplify'
import { Order, OrderItem, Basket } from '../models'
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => 
{
    const { dbUser } = useAuthContext()
    const { dispo, totalPrice, basketItems, basket } = useBasketContext()


    const [ orders, setOrders ] = useState([])

    useEffect(() => 
    {
        DataStore.query(Order, o => o.userID("eq", dbUser.id)).then(setOrders)
    }, [dbUser])
    const createOrder = async () => 
    {
        // create order
        const newOrder = await DataStore.save(new Order(
            {
                userID: dbUser.id,
                Dispo: dispo,
                status: 'NEW',
                total: totalPrice,
            }
        ))
        // add all basketItems to the order
        await Promise.all(basketItems.map(basketItem => DataStore.save(new OrderItem(
            {
                quantity: basketItem.quantity,
                orderID: newOrder.id,
                Item: basketItem.Item,
            }))))
        // delete basket
        await DataStore.delete(basket)

        setOrders([...orders, newOrder])
    }

    return (
        <OrderContext.Provider value={{ createOrder, orders }}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)