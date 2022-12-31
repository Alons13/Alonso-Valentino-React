import React from "react";
import './App.css';
import Navbar1 from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from './components/Card/Card'
import Checkout from "./components/Checkout/checkout";
import { CardContextProvider } from './CardContext/CardContext';
import Form from "./components/Form/Form";

function App() {
  
  return (
    <div>
      <CardContextProvider>
        <BrowserRouter>
          <Navbar1 />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryid' element={<ItemListContainer />}/>
            <Route path='/item/:itemid' element={<ItemDetailContainer />} />
            <Route path='/card' element={<Card />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/form' element={<Form />} />          
          
          </Routes>
        </BrowserRouter>
      </CardContextProvider>
    </div>
  );
}

export default App;
