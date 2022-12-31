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
//className="rounded-xl max-h-30 w-30 lg:max-h-30 lg:w-30 shadow-lg ml-8 lg:ml-0 shadow-slate-100/80 ring-2 ring-slate-700/50"
//flex rounded-xl max-h-50 w-50 lg:max-h-50 lg:w-50 shadow-lg ml-8 lg:ml-0 
	return (
		<div >
			<h1>Detalle del Item</h1>
			<div >
				<img className="absolute inset-y-80 right-40 w-40 ..." src={img}/>
				
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