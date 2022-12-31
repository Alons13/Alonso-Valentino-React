import { useContext, useState } from 'react'
import { CardContext } from "../../CardContext/CardContext";
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import swal from 'sweetalert';


import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Form = () => {
    const { card, getTotalCard,  } = useContext(CardContext)
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [email,setEmail]=useState()

    const navigate = useNavigate()

    const handleCreateOrder = async () => {
        
            const itemsFire = card.map((items) => ({
                id: items.id,
                title:items.title,
                price: items.price,
                quantity: items.quantity,
            }))
       
            const objOrder = {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    
                    
                },
                items: itemsFire,
                total: getTotalCard()
            }
    
            const batch = writeBatch(db)
    
            
    
            if(!name || !email || !phone) {
                swal("Error!", "Ingresa todos tus Datos!", "error");
                console.log('Ingresa todos los Datos')
            } else {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
                swal("Orden Cargada!", "", "success");
    
                
    
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
        <div className="contact-wrap w-100 p-lg-5 p-4">
            <h1 className="mb-4"
            >Ingresa Tus Datos</h1>
          
            <main>  
      <div>
			
			<div className='form'>
				<form 
                className="contactForm"
                onSubmit={handleSubmit}>
					<div className="form-group" >
                        Ingresá tu nombre:
                        </div>
					<input
						type="text"
						value={name}
                        placeholder="Nombre"
						onChange={(e) => setName(e.target.value)}
					/>
                    <div>
					Ingresá tu e-mail:
                    </div>
					<input
						type="text"
						value={email}
                        placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
                    <div>
					Ingresá tu teléfono:
                    </div>
					<input
						type="number"
						value={phone}
                        placeholder="Phone"
						onChange={(e) => setPhone(e.target.value)}
					/>
                    
					<button className="px-6 py-2 text-base font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner bg-green-400/80 text-black" type="submit">Confirmar Orden</button>
				</form>
			</div>

			<Link to={`/`}>
              <button 
              className="px-6 py-2 text-base  col-span-1 p-4 pb-0  text-center  my-10 font-black bg-gray-200 rounded active:bg-gray-300 active:shadow-inner text-black bg-blue-400/80">
                Volver a la tienda
              </button>
            </Link>
		</div>
            </main>
            
        </div>
    )
}

export default Form