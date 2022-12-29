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
				<div>
					<div>
						<button onClick={() => {
								decrement();
						}}>
						-	
						</button>

						<h4>{count}</h4>

						<button onClick={() => {
								increment();
						}}>
						+	
						</button>
					</div>
					<button
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