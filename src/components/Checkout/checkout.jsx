import {  useContext } from "react";
import { CardContext } from "../../CardContext/CardContext";
import { Link } from "react-router-dom";


const Checkout = () => {
  
  const { card, getTotalCard } = useContext(CardContext);

  

  return (
    <>
      <div className="flex justify-center relative">
        <h1 className="my-10 text-2xl md:text-4xl font-thin tracking-wider  font-serif">
          Orden a Confirmar
        </h1>
      </div>
      {card.map((items) => (
        <div className="flex px-4 md:px-8 lg:px-16 py-6 my-6 justify-between items-center bg-slate-100 "
        key={items.id}>
        
          <img 
          className="rounded-xl max-h-20 w-20 lg:max-h-28 lg:w-28 shadow-lg ml-8 lg:ml-0 shadow-slate-100/80 ring-2 ring-slate-700/50"
          src={items.img}
          alt=""  />

          <p className="lg:text-lg w-60 md:w-96  font-medium tracking-wide h-12 flex justify-center items-center">
            {items.title}
          </p>

          <div className="flex flex-col items-center sm:flex-row">
            <p className="sm:text-base md:text-lg lg:text-xl w-max-content  font-medium tracking-wide h-12 w-40 flex justify-center items-center">
              $ {items.price} / {items.quantity} Un.
            </p>
            <p className="w-max-content md:text-xl lg:text-3xl  font-medium tracking-wide h-12 flex justify-center items-center w-24 lg:w-32">
            =${items.price * items.quantity}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-around p-6">
        <p className="p-3 text-xl md:text-2xl lg:text-3xl font-thin tracking-wider  font-serif ">
          Total de la compra = $ {getTotalCard()}
        </p>
        <Link to={`/form`}>
              <button 
              className="p-3 text-xl md:text-2xl lg:text-3xl font-thin tracking-tighter  font-serif bg-green-400/80  transition-all rounded-lg px-4">
              Continuar
              </button>
            </Link>


      </div>
    </>
  );
};

export default Checkout;