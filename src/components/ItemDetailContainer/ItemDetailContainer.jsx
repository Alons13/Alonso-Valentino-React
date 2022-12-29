import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [items, setItems] = useState({});
	const {itemid} = useParams();

	useEffect(() => {

		const docRef = doc(db, 'Items', itemid)
            getDoc(docRef)
            .then((response) => {
            const data = response.data();
            const itemsAdapted = { id: response.id, ...data };
            setItems(itemsAdapted);
        })
      
    }, [itemid])

	
	return <ItemDetail {...items} />;
};

export default ItemDetailContainer;
