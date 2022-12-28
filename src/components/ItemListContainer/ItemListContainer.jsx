import { useState, useEffect } from "react"
import Item from "../Item/Item"
import { getItems, getItemsbyCategory } from "../../Mock";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const [items, setItems]  = useState([])

    const { categoryid } = useParams()

    useEffect(() => {
        if(!categoryid){
            getItems()
            .then(response =>{
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            getItemsbyCategory(categoryid)
            .then(response =>{
                setItems(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
            
    },[categoryid])
    
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