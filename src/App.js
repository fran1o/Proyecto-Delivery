import './App.css';
import Header from './Inicio/Header';
import Home from './Inicio/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateOrders from './CreateOrders/CreateOrders';
import Orders from './Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/crearpedidos' element={<CreateOrders />} />
        <Route path='/pedidos' element={<Orders />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  
    </BrowserRouter>

    

  );
}

export default App;
