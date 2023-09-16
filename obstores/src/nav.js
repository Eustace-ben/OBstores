// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/js/bootstrap.esm';
//import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from './axiosApi/axiosInstance';


const Nav = () => {


axios.defaults.withCredentials = true;
const Navigate = useNavigate();
const handlelogout = ()=>{

  axios.get('/logout')
  .then(res => {
    if(res.data.status === "success"){
      Navigate('/login')
    }
  })
  .catch(err => console.log(err))
}


    return ( 
<div className="NavComponent">
 {/* START NAVBAR */}

 <div>
 <nav className="navbar navbar-expand-sm navColor d-block" id="neubar">
      <div className="container">
        < Link to='/' className="navbar-brand" href="#"> <strong>  OBstores </strong> </Link>

        <li className='d-lg-none d-md-none d-flex float-right' style={{margin: '-5px'}}>
              <Link to='/cart'><i className="bi bi-cart3 cartIcon " style={{margin: '-17px'}} ></i></Link>
              <Link to='/myaccount'> <i className="bi bi-person-badge personIcon"></i></Link>
        </li>
    
        <div className=" collapse navbar-collapse d-sm-none d-md-block d-none d-sm-block" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
  
            <li class="nav-item dropdown">
              <Link class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link  to='/myaccount' class="dropdown-item" >My Account</Link></li>
                <li><Link to='/login' className="dropdown-item" >Sign In</Link></li>
                <li><Link to='/register' className="dropdown-item" >Register</Link></li>
                <li><Link to='/logout' className="dropdown-item" onClick={handlelogout} >logout</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to='/cart' class="nav-link px-3" aria-current="page"><i class="bi bi-cart3 cartIcon" ></i></Link>
            </li>

          </ul>
          
        </div>
      </div>
    </nav>


    {/* START SECOND NAV  */}
<section class='bg-light secondNav'>
<nav class="navbar bg-light">
  <div class="container-fluid">
   <Link  type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
   {/* <i class="bi bi-list btnNav"></i>  */}
   <span class="bi bi-list btnNav"></span> 
</Link>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>

  </div>
  {/*  SEARCH BAR */}

  <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
      <button type="submit" class="searchButton">
      <i class="bi bi-search"></i>
     </button>
   </div>
</div>

  {/*  SEARCH BAR */}
</nav>




</section>

    {/* END SECOND NAV */}
  </div>

 {/* END NAVBAR */}
 </div>


        
     );
}
 
export default Nav;