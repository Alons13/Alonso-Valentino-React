import { useState, useContext } from "react";
import { CardContext } from "../../CardContext/CardContext";
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";



const Checkout = () => {
  
  const { card, getTotalCard } = useContext(CardContext);

  const handleCreateOrder = () => {
    const objOrder ={
        buyer: {
            name: 'Valentino Alonso',
            email: 'valentino.alonsonovillo@gmail.com',
            phone: '123456789'
        },
        items: card,
        //total: getTotalCard(),
    }
    const orderRef  = collection(db, 'orders')

    addDoc(orderRef, objOrder)
        .then(response => {
            console.log(response.id)
        })

  }
  

  return (
    <>
      <div>
        <h1>
          Resumen de la orden
        </h1>
      </div>
      {card.map((items) => (
        <div
          key={items.id}>
          <img src={items.img} style={{width:'200px'}} />
          <p >
            {items.title}
          </p>
          <div>
            <p>
              $ {items.price} / {items.quantity} Un.
            </p>
            <p >
              El precio de {items.quantity} es de $ {items.price * items.quantity}
            </p>
          </div>
        </div>
      ))}
      <div>
        <p>
          Total de la compra: $ {getTotalCard()}
        </p>
        <button onClick={handleCreateOrder}>
          Confirmar Orden
        </button>
      
      </div>
    </>
  );
};

export default Checkout;
