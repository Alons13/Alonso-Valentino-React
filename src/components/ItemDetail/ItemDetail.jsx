import { CardContext } from "../../CardContext/CardContext";
import ItemCount from "../ItemCount/ItemCount";
import {useState, useContext} from "react";


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
		<div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
			<h1>Detalle del Item</h1>
			<div >
				<img className="fixed left-6 top-50" src={img}/>
				
				<div className="fixed top-80">
					<h3 className="p-4 text-3xl font-bold text-center w-96">{title}</h3>
					<p className="font-bold uppercase text-md">$ {price}</p>
					<p className="font-bold uppercase text-md">{text}</p>
					<ItemCount initial={0} onAdd={handleOnAdd} />
					
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;