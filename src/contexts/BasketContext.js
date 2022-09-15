import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";

const BasketContext = createContext({})

const BasketContextProvider = ({ children }) =>
{
    const addItemToBasket = (item, quantity) => 
    {
        console.log('ass dish to basket', item, quantity)
    }

    return (
        <BasketContext.Provider value={{addItemToBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)