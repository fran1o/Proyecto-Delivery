import './App.css';
import ContainerCalendario from './Inicio/ContainerCalendario';
import Header from './Inicio/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateOrders from './CreateOrders/CreateOrders';
import Orders from './Orders/Orders';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/crearpedidos' element={<CreateOrders />} />
        <Route path='/historialpedidos' element={<Orders />} />
      </Routes>
     <ContainerCalendario />
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
