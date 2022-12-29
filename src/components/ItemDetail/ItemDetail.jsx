import { CardContext } from "../../CardContext/CardContext";
import ItemCount from "../ItemCount/ItemCount";
import {useState, useContext} from "react";
import swal from "sweetalert";


const ItemDetail = ({
	id,
	title,
	text,
	price,
	img,
}) => {
	const [cantidadAgregar, setCantidadAgregar] = useState(0);
    const { addCard } = useContext(CardContext)

	const handleOnAdd = (quantity) => {
		console.log('se agrego al  carrito' +  quantity)
		setCantidadAgregar(quantity);
		addCard({id, img, price, title, quantity});
	};

	return (
		<div>
			<h1>Detalle del Item</h1>
			<div>
				<img  src={img}/>
				<div>
					<h3>{title}</h3>
					<p>$ {price}</p>
					<p>{text}</p>
					<ItemCount initial={0} onAdd={handleOnAdd} />
					
					
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;