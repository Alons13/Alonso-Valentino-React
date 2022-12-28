import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import React from "react";
import { getItemsbyId } from "../../Mock";
import { CardContext } from "../../CardContext/CardContext";
import swal from 'sweetalert';


const ItemDetailContainer = () => {
   const [items, setItems]  = useState({})
   const params = useParams()
   const [ setCardEmpty ] = useState(false);
   const { addCard } = useContext(CardContext)

       useEffect(() => {
           getItemsbyId(params.itemid)
               .then(response =>{
                   setItems(response)
           })
           
       },[params.itemid])       

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