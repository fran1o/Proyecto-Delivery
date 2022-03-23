import './App.css';
import Header from './Inicio/Header';
import Home from './Inicio/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateOrders from './CreateOrders/CreateOrders';
import Orders from './Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Context/CartContext';
import Historial from './Historial/Historial';

function App() {

  return (
    <CartContextProvider>

<BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/crearpedidos' element={<CreateOrders />} />
        <Route path='/pedidos' element={<Orders />} />
        <Route path='/historial' element={<Historial />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  
    </BrowserRouter>


    </CartContextProvider>
      

    

  );
}

export default App;
