import { useContext, useState } from 'react'
import { CardContext } from "../../CardContext/CardContext";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Form = () => {
    const { card, getTotalCard,  } = useContext(CardContext)
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [email,setEmail]=useState()

    const navigate = useNavigate()

    const handleCreateOrder = async () => {
        

       
            const objOrder = {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    
                    
                },
                //items: card,
                total: getTotalCard()
            }
    
            const batch = writeBatch(db)
    
            
    
            if(!name || !email || !phone) {
                
                console.log('Hay productos fuera de stock')
            } else {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                
    
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                console.log(orderAdded.id)
            }
        
    } 
       

    
    const handleSubmit = (e) => {
		e.preventDefault();
		handleCreateOrder();
	};

    return (
        <div>
            <h1>Checkout</h1>
          
            <main>  
      <div>
			
			<div className='form'>
				<form onSubmit={handleSubmit}>
					<div>
                        Ingresá tu nombre:
                        </div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
                    <div>
					Ingresá tu e-mail:
                    </div>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
                    <div>
					Ingresá tu teléfono:
                    </div>
					<input
						type="number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
                    
					<button className='boton' type="submit">Confirmar Orden</button>
				</form>
			</div>

			<Link to={"/"}>Volver a Home</Link>
		</div>
            </main>
            
        </div>
    )
}

export default Form