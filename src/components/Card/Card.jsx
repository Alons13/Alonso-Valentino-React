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
            <h1
            className="w-full col-span-1 p-4 pb-0  text-center  my-10 text-2xl md:text-4xl font-thin tracking-wider  font-serif "
            >Carrito vacio</h1>
            <Link to={`/`}>
              <button 
              className="px-6 py-2 text-base  col-span-1 p-4 pb-0  text-center  my-10 font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner text-black bg-blue-400/80">
                Volver a la tienda
              </button>
            </Link>
          </div>
        );
      }
    
      return (
        <>
          <>
            <h1 className="w-full col-span-1 p-4 pb-0  text-center  my-10 text-2xl md:text-4xl font-thin tracking-wider  font-serif ">Items a Comprar</h1>
            {card.map((items) => (
              <div
              className="flex px-4 md:px-8 lg:px-16 py-6 my-6 justify-between items-center bg-slate-100 "
               key={items.id}>

                <img
                className="rounded-xl max-h-30 w-30 lg:max-h-30 lg:w-30 shadow-lg ml-8 lg:ml-0 shadow-slate-100/80 ring-2 ring-slate-700/50"
                src={items.img} style={{width:'200px'}} />

                  
                <p className="lg:text-lg w-60 md:w-96  font-medium tracking-wide h-12 flex justify-center items-center">
                  {items.title}</p>

                <div className="flex flex-col items-center sm:flex-row">
                  <p
                  className="sm:text-base md:text-lg lg:text-xl w-max-content  font-medium tracking-wide h-12 w-40 flex justify-center items-center"> $ {items.price} Por Unidad.</p>
                  <p className="w-max-content md:text-xl lg:text-3xl  font-medium tracking-wide h-12 flex justify-center items-center w-24 lg:w-32">=$ {items.price * items.quantity}</p>
                </div>
                
                <button 
                className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner text-black bg-red-400 "
                onClick={() => {
                  removeItem(items.id)
                
                swal("Producto Eliminado del Carrito!", "", "error");

                }}>X</button>

                
              </div>
            ))}
          </>
          <div>
            <div>
            <button 
            className="px-6 py-2 text-base font-black  rounded active:bg-gray-300 active:shadow-inner text-black bg-red-400 "
            onClick={() => {
                  clearList()
                
                swal("Productos Eliminados!", "", "success");

                }}>Eliminar Todos Los Productos</button>  


              <Link to={`/`}>
            <button
            className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner text-black bg-blue-400/80">
                Volver a la Tienda
            </button>
              </Link>
              
              
              <Link to={`/checkout`}>
            <button
            className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner bg-green-400/80 text-black">
                Finalizar Compra
            </button>
              </Link>

            </div>
            <p className="p-3 text-xl md:text-2xl lg:text-3xl font-thin tracking-wider  font-serif ">  Total de la compra: $ {getTotalCard()}</p>
          </div>
        </>
      );
    };
    
    export default Card;
    