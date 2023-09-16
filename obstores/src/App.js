import './styles.css';
import './App.css';
import Home from './home';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Account from './myaccount';
import Detail from './detail';
import Checkout from './checkout';
import Cart from './cart';
import Order from './order';
import AccountDetail from './accountDetails';
import Address from './address';
import LoginAndSecurity from './loginAndSecurity';
import EditDetails from './editDetails';
import EditAddress from './editAddress';
import Dashboard from './admin/dashboard';
import Access from './admin/access';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Register />}></Route>
         <Route path='/myaccount' element={<Account />}></Route>
         <Route path='/detail' element={<Detail />}></Route>
         <Route path='/cart' element={<Cart />}></Route>
         <Route path='/checkout' element={<Checkout />}></Route>
         <Route path='/order' element={<Order />}></Route>
         <Route path='/accountDetails' element={<AccountDetail />}></Route>
         <Route path='/address' element={<Address />}></Route>
         <Route path='/loginAndSecurity' element={<LoginAndSecurity />}></Route>
         <Route path='/editDetails/:id' element={<EditDetails />}></Route>
         <Route path='/editAddress' element={<EditAddress />}></Route>
         {/* ADMIN ROUTES  */}
         <Route path='/access' element={< Access/> }></Route>
         <Route path='/dashboard' element={< Dashboard/> }></Route>

         


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
