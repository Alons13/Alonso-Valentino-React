import { Link } from "react-router-dom"



//const Item = ({Item}) => {
//    return(
//        <div className="Item">
//            <h2>{items.title}</h2>
//            <p>{items.text.slice(0, 50)}...</p>
//            <Link to={`/items/${items.id}`}>Ver Detalle</Link>
//        </div>
//    )
//}




const Item = (props)  => {
    return (
        <div>
        <h1>{props.greeting}</h1>
           <Link to ={`/item/${props.id}`}>
                
                <h2>{props.title}</h2>
                
            </Link>
        <p>
           
            {props.text.slice(0, 50)}
            <p>{props.price}</p>
            <img src={props.img} style={{width:'200px'}} />
        </p>
        
        <div  style={{display: 'flex', margin: 20 }}>
        </div>
    </div>
    )
}
   

export default Item