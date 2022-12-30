import { useContext } from "react"
import { CardContext } from "../../CardContext/CardContext";

const CardWidget = () => {

    const { getCardCounter } = useContext(CardContext)

    return(
        <button>
            {getCardCounter
          ? <p>{getCardCounter}</p>
          : `${getCardCounter}`
        }
            <img src={'./images/cart.png'} alt='cart-widget'/>
            
        </button>
    )
}

export default CardWidget