import { useState, createContext, useEffect } from "react";

export const CardContext = createContext([]);

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

    const getTotalCard = () => {
      let totalCard = 0;
      card.forEach((item) => {
        let subTotal = item.price * item.quantity;
        totalCard += subTotal;
      });
      return totalCard;
    };
    const getCardCounter = () => {
      let totalQuantity = 0;
  
      card.forEach((item) => {
        totalQuantity += item.quantity;
      });
      return totalQuantity;
    };



    //const totalCard = card.reduce((acc, currentValue) => acc + currentValue.total, 0);
    //const totalQty = card.reduce((acc, currentValue) => acc + currentValue.cantidad, 0);

    useEffect(() => {
        setCard(card);
    }, [card]);

    //useEffect(() => {
    //    setTotal(totalCard)
    //}, [totalCard]);

    const isInCard = (id) => {
      return card.some((items) => items.id === id)
    }

    const removeItem = (id) => {
        const CardAct = card.filter((item) => item.id !== id);
        setCard(CardAct);
        if (CardAct.length === 0) {
          setIsCardEmpty(true)
        }
      };
    
      const clearList = () => {
        setCard([]);
        setIsCardEmpty(true)
        setTotal([]);
      };
    
    
    return (
        <CardContext.Provider value={{card, addCard, removeItem, clearList, isCardEmpty,  total, getTotalCard, getCardCounter}}>
          {children}
        </CardContext.Provider>
      ) 
};
