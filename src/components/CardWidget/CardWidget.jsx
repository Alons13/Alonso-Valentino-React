import { useContext } from "react"
import { CardContext } from "../../CardContext/CardContext";

const CardWidget = () => {

    const { totalQty } = useContext(CardContext)

    return(
        <button>
            {totalQty
          ? <p>{totalQty}</p>
          : ""
        }
            <img src={'./images/cart.png'} alt='cart-widget'/>
            
        </button>
    )
}

export default CardWidget