'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

type Context = {
  cart: { [K: string]: { wage: string, quantity: number, is_disc: boolean } }
  favorites: { [K: string]: { wage: string } }
  compares: { [K: string]: { wage: string } }
  addToCart: (product_id: string, wage: string, quantity: number, is_disc: boolean) => void,
  removeFromCart: (product_id: string, wage: string, is_disc: boolean) => void,
  addToFavorites: (product_id: string, wage: string) => void,
  removeFromFavorites: (product_id: string, wage: string) => void,
  addToCompares: (product_id: string, wage: string) => void
  removeFromCompares: (product_id: string, wage: string) => void
};

const defaultContext: Context = {
  cart: {},
  favorites: {},
  compares: {},
  addToCart: () => { },
  removeFromCart: () => { },
  addToFavorites: () => { },
  removeFromFavorites: () => { },
  addToCompares: () => { },
  removeFromCompares: () => { },
};

export const GlobalContext = createContext(defaultContext);

type GlobalProviderProps = {
  children: ReactNode
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [cart, setCart] = useState(defaultContext.cart);
  const [favorites, setFavorites] = useState(defaultContext.favorites);
  const [compares, setCompares] = useState(defaultContext.compares);

  const eventCart = (product_id: string, wage: string, quantity: number, is_disc: boolean, add: boolean = true) => {
    if (add) {
      setCart(prevCart => ({ ...prevCart, [product_id]: { quantity, wage, is_disc } }));
    } else {
      setCart(prevCart => {
        const obj = { ...prevCart }
        delete obj[product_id]
        return obj
      })
    }
  };
  const addToCart = (product_id: string, wage: string, quantity: number, is_disc: boolean) => eventCart(product_id, wage, quantity, is_disc, true)
  const removeFromCart = (product_id: string, wage: string, is_disc: boolean) => eventCart(product_id, wage, 1, is_disc, false)

  const eventFavorites = (product_id: string, wage: string, add: boolean = true) => {
    if (add) {
      setFavorites(prevFavorites => ({ ...prevFavorites, [product_id]: { wage } }));
    } else {
      setFavorites(prevFavorites => {
        const obj = { ...prevFavorites }
        delete obj[product_id]
        return obj
      })
    }
  };
  const addToFavorites = (product_id: string, wage: string) => eventFavorites(product_id, wage, true)
  const removeFromFavorites = (product_id: string, wage: string) => eventFavorites(product_id, wage, false)

  const eventCompares = (product_id: string, wage: string, add: boolean = true) => {
    if (add) {
      setCompares(prevCompares => ({ ...prevCompares, [product_id]: { wage } }));
    } else {
      setCompares(prevCompares => {
        const obj = { ...prevCompares }
        delete obj[product_id]
        return obj
      })
    }
  };
  const addToCompares = (product_id: string, wage: string) => eventCompares(product_id, wage, true)
  const removeFromCompares = (product_id: string, wage: string) => eventCompares(product_id, wage, false)

  return (
    <GlobalContext.Provider
      value={{
        cart,
        favorites,
        compares,
        addToCart,
        removeFromCart,
        addToFavorites,
        removeFromFavorites,
        addToCompares,
        removeFromCompares
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
