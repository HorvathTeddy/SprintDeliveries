import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketItem, Dispo } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({})

const BasketContextProvider = ({ children }) =>
{
    const { dbUser } = useAuthContext()
    
    const [dispo, setDispo] = useState(null)
    const [basket, setBasket] = useState(null)
    const [basketItems, setBasketItems] = useState([])

    // calculating basket price
    const totalPrice = basketItems.reduce((sum, basketItem) => sum + basketItem.quantity * basketItem.Item.price, 0)

    // fetching the basket
    useEffect(() =>
    {
        DataStore.query(Basket, (b) => 
        b.dispoID("eq", dispo.id).userID("eq", dbUser.id)
        ).then((baskets) => setBasket(baskets[0]))
    }, [dbUser, dispo])

    useEffect(() => 
    {
        if(basket)
        {
            DataStore.query(BasketItem, (bd) => bd.basketID("eq", basket.id)).then(setBasketItems)
        }
    }, [basket])

    const addItemToBasket = async (item, quantity) => 
    {
        //get existing basket or create a new one
        let theBasket = basket || (await createNewBasket())

        // create a BasketItem
        const newItem = await DataStore.save(new BasketItem({ quantity, Item: item, basketID: theBasket.id }))

        setBasketItems([...basketItems, newItem])
    }

    const createNewBasket = async () =>
    {
        const newBasket = await DataStore.save(new Basket({userID: dbUser.id, dispoID: dispo.id})
        )
        setBasket(newBasket)
        return newBasket
    }

    return (
        <BasketContext.Provider value={{ addItemToBasket, setDispo, dispo, basket, basketItems, totalPrice }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)