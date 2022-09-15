import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({})

const BasketContextProvider = ({ children }) =>
{
    const { dbUser } = useAuthContext()
    
    const [dispo, setDispo] = useState(null)
    const [basket, setBasket] = useState(null)

    // fetching the basket
    useEffect(() =>
    {
        DataStore.query(Basket, b => b.dispoID('eq', dbUser.id)
        ).then((baskets) => setBasket(baskets[0]))
    }, [dbUser, dispo])

    const addItemToBasket = async (item, quantity) => 
    {
        //get existing basket or create a new one
        let theBasket = basket || await createNewBasket() 

    }

    const createNewBasket = async () =>
    {
        const newBasket = await DataStore.save(new Basket({userID: dbUser.id, dispoID: dispo.id})
        )
        setBasket(newBasket)
        return newBasket
    }

    return (
        <BasketContext.Provider value={{ addItemToBasket, setDispo }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)