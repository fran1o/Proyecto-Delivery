import './App.css';
import Header from './Inicio/Header';
import Home from './Inicio/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Historial from './Historial/Historial';
import Repartidores from './RepartidoresHome/Repartidores';
import TablaPedido from './Table/TablaPedido';
import ItemDetailPedidos from './Pedidos/ItemDetailPedidos';
import CartContextProvider from './Context/cartContext';


function App() {

  return (

    <CartContextProvider>
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/crearrepartidor' element={<Repartidores />} />
            <Route path='/repartidores' element={<TablaPedido />} />
            <Route path='/historial' element={<Historial />} />
            <Route path='/' element={<Home />} />
            <Route path='/repartidor/:idRepartidor' element={<ItemDetailPedidos />} />
          </Routes>
        </div>
  
    </BrowserRouter>


</CartContextProvider>


      

    

  );
}

export default App;
