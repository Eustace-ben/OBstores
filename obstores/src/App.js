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
import Myorder from './myorder';
import AccountDetail from './accountDetails';
import Address from './address';
import LoginAndSecurity from './loginAndSecurity';
import EditDetails from './editDetails';
import EditAddress from './editAddress';
import HomeAdmin from './admin/HomeAdmin';
import Access from './admin/access';
import Dashboard  from './admin/components/dashboard';
import Chart from './admin/components/chart';
import Order from './admin/components/orders';
import Products from './admin/components/manageproducts';
import Manageusers from './admin/components/manageUsers';
import TEST from './test';
import Useredit from './admin/components/useredit';
import Productedit from './admin/components/productedit';





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
         <Route path='/myorder' element={<Myorder />}></Route>
         <Route path='/accountDetails' element={<AccountDetail />}></Route>
         <Route path='/address' element={<Address />}></Route>
         <Route path='/loginAndSecurity' element={<LoginAndSecurity />}></Route>
         <Route path='/editDetails/:id' element={<EditDetails />}></Route>
         <Route path='/editAddress' element={<EditAddress />}></Route>

         <Route path='/test' element={<TEST />}></Route>
         

         {/* ADMIN ROUTES  */}
         <Route path='/access' element={< Access/> }></Route>
         <Route path='' element={< HomeAdmin/> }>

           <Route path='/admin/dashboard' element={ < Dashboard/>}></Route>
           <Route path='/admin/chart' element={ < Chart/>}></Route>
           <Route path='/admin/orders' element={ < Order/>}></Route>
           <Route path='/admin/manageproducts' element={ < Products/>}></Route>
           <Route path='/admin/manageUsers' element={ < Manageusers/>}></Route>
           <Route path='/admin/useredit/:id' element={ <Useredit/>}></Route>
           <Route path='/admin/productedit/:id' element={ <Productedit />}></Route>


         </Route>

         


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
