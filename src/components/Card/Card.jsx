import { useContext } from "react";
import { CardContext } from "../../CardContext/CardContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';


const Card = () => {
    const { card, clearList, isCardEmpty, getTotalCard, removeItem } =
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
                <img src={items.img} style={{width:'200px'}} />

                  
                <p>{items.title}</p>

                <div>
                  <p> $ {items.price} Por Unidad.</p>
                  <p> El precio de {items.quantity} unidad/es, es de $ {items.price * items.quantity}</p>
                </div>
                
                <button onClick={() => {
                  removeItem(items.id)
                
                swal("Producto Eliminado del Carrito!", "", "error");

                }}>X</button>

                
              </div>
            ))}
          </>
          <div>
            <div>
            <button onClick={() => {
                  clearList()
                
                swal("Productos Eliminados!", "", "success");

                }}>Eliminar Todos Los Productos</button>  


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
            <p>  Total de la compra: $ {getTotalCard}</p>
          </div>
        </>
      );
    };
    
    export default Card;
    