import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = () => {
    const [items, setItems]  = useState([])
    const { categoryid } = useParams()

        useEffect(() => {
         
            const collectionRef = categoryid
            ? query(collection(db, 'Items'), where('category', '==', categoryid))
            : query(collection(db, 'Items'), orderBy('title'  ))

            getDocs(collectionRef).then(response => {
                const itemsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setItems(itemsAdapted)
                })
        },[categoryid]);
    
    return(

        <div>
            <h1>Listado de Items</h1>
        { items.map(item => 
        <Item 
            id = {item.id}
            title = {item.title}
            price = {item.price}
            text = {item.text}
            img = {item.img}
            //Solucionar  IMG         
        /> 
        )}
        </div>  
        )}
        
   
export default ItemListContainer