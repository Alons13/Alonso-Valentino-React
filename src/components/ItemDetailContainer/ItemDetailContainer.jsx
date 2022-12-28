import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import React from "react";
import { CardContext } from "../../CardContext/CardContext";
import swal from 'sweetalert';
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";



const ItemDetailContainer = () => {
   const [items, setItems]  = useState({})
   const [ setCardEmpty ] = useState(false);
   const { addCard } = useContext(CardContext)
   
   //const params = useParams()
   const {itemid} = useParams()

       useEffect(() => {
            const docRef = doc(db, 'Items', itemid)

            getDoc(docRef)
            .then((response) => {
            const data = response.data();
            const itemsAdapted = { id: response.id, ...data };
            setItems(itemsAdapted);
        })
      
    }, [itemid])
        //    getItemsbyId(params.itemid)
        //        .then(response =>{
        //            setItems(response)
        //    })
           

       return(
           <div>
               <h1>{items.title}</h1>
               <h2>{items.text}</h2>
               <p>{items.img}</p>
               <img src={items.img}/>
               <p>{items.price}</p>
               <button onClick={() => {
                
                addCard(items);
                swal("Producto Agregado al  Carrito!", "Visita el carrito para proceder,  con  la compra", "success");



                }}>Agregar al Carrito</button>
           </div>
       )
      }
       


export default ItemDetailContainer