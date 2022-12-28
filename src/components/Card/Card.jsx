import { useContext } from "react";
import { CardContext } from "../../CardContext/CardContext";
import { Link } from "react-router-dom";

const Card = () => {
    const { card, clearList, isCardEmpty, total, removeItem } =
      useContext(CardContext);

      if (isCardEmpty) {
        return (
          <div>
            <h1>Carrito vacio</h1>
            <Link to={`/`}>
              <button>
                Volver a la tienda
              </button>
            </Link>
          </div>
        );
      }
    
      return (
        <>
          <>
            <h1>Items a Comprar</h1>
            {card.map((items) => (
              <div key={items.id}>
                <img
                  src={items.img}
                  alt=""/>

                <p>{items.title}</p>

                <div>
                  <p> $ {items.price} Por Unidad.</p>
                  <p> El precio de {items.cantidad} unidad/es, es de $ {items.price * items.cantidad}</p>
                </div>
                
                <button fn={() => removeItem(items.id)}>
                  X
                </button>
              </div>
            ))}
          </>
          <div>
            <div>
            <button fn={clearList}>
                Vaciar Carrito
            </button>

              <Link to={`/`}>
            <button>
                Volver a la Tienda
            </button>
              </Link>
              
              <Link to={`/checkout`}>
            <button>
                Finalizar Compra
            </button>
              </Link>

            </div>
            <p>  Total de la compra: $ {total}</p>
          </div>
        </>
      );
    };
    
    export default Card;
    