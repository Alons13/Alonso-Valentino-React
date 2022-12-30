import {useState} from "react";
import {useContext} from "react";
import swal from 'sweetalert';
import { CardContext } from "../../CardContext/CardContext";




const ItemCount = ({initial, onAdd}) => {
	//const { addCard } = useContext(CardContext)
	const [count, setCount] = useState(initial);
	const increment = () => {
		if (count >= 0) setCount(count + 1);
	};

	const decrement = () => {
		if (count >= 1) setCount(count - 1);
	};

	return (
				<div className="flex flex-wrap items-center justify-center gap-2">
					<div>
						<button 
						className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md " 
						onClick={() => {
								decrement();
						}}>
						-	
						</button>

						<h4 
						className="px-6 py-2 text-base font-black "
						>{count}</h4>

						<button 
						className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md "
						 onClick={() => {
								increment();
						}}>
						+	
						</button>
					</div>
					<button className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner hover:shadow-md "
					onClick={() => {
							onAdd(count);
							swal("Producto Agregado al  Carrito!", "Visita el carrito para proceder,  con  la compra", "success");
						}}
						disabled={!count}
						>
						Agregar al carrito
					</button>
				</div>
	);
};

//addCard(items);
export default ItemCount;