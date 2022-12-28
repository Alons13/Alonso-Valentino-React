import { useState, createContext, useEffect } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {

    const [card, setCard]  = useState([])
    const [isCardEmpty, setIsCardEmpty] = useState(true);
    let [total, setTotal] = useState(0);

    const addCard = (itemagregar, cantidad) => {

        itemagregar.cantidad = cantidad;
        itemagregar.total = cantidad * itemagregar.price;

        if(!isInCard(itemagregar.id)) {
            setCard([...card, itemagregar])
            setIsCardEmpty(false)
        } else {
            const itemActualizar = card.findIndex((obj => obj.id === itemagregar.id));
            card[itemActualizar].cantidad = itemagregar.cantidad;
            card[itemActualizar].total = itemagregar.total;
            setTotal(card.reduce((acc, currentValue) => acc + currentValue.total, 0))
        }
    };

    const totalCard = card.reduce((acc, currentValue) => acc + currentValue.total, 0);
    const totalQty = card.reduce((acc, currentValue) => acc + currentValue.cantidad, 0);

    useEffect(() => {
        setCard(card);
    }, [card]);

    useEffect(() => {
        setTotal(totalCard)
    }, [totalCard]);

    const isInCard = (id) => {
      return card.some((items) => items.id === id)
    }

    
    
    return (
        <CardContext.Provider value={{card, addCard, isCardEmpty, totalQty}}>
          {children}
        </CardContext.Provider>
      ) 
};