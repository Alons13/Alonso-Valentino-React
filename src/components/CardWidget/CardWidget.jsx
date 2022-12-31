import { useContext } from "react"
import { CardContext } from "../../CardContext/CardContext";

const CardWidget = () => {

    const { getCardCounter } = useContext(CardContext)

    return(
        <button>
            
           <p className="text-black px-4 py-1 font-semibold text-4xl  z-50 w-8 absolute">{getCardCounter()}</p>
          
        
            <img  className="  " src={'../images/cart.png'} alt='cart-widget'/>
            
        </button>
    )
}

export default CardWidget