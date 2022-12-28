import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"
//props
const ItemListContainer = () => {
    const [items, setItems]  = useState([])
    const { categoryid } = useParams()

        useEffect(() => {
            const collectionRef = collection(db, 'Items')

            getDocs(collectionRef).then(response => {
                console.log(response.docs)
                const itemsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setItems(itemsAdapted)
                })
        },[categoryid]);

    // useEffect(() => {
    //     if(!categoryid){
    //         getItems()
    //         .then(response =>{
    //             setItems(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     } else {
    //         getItemsbyCategory(categoryid)
    //         .then(response =>{
    //             setItems(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     }
            
    //},[categoryid])
    
    return(

        <div>
        { items.map(item => 
        <Item 
            id = {item.id}
            title = {item.title}
            price = {item.price}
            text = {item.text}
            img = {item.img}
            
            
        /> 
        )}
        </div>  
        )}
        
   
export default ItemListContainer