import Nav from './nav';
import Footer from './footer';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from './axiosApi/axiosInstance';
import { useEffect, useState } from 'react';

const Account = () => {
const [data, setData] = useState([]);
axios.defaults.withCredentials = true;
//const navigate = useNavigate();
useEffect(()=>{
  axios.get('myaccount')
  .then(res => {
    if(res.data.status === "success"){
      setData(res.data.data[0], {...data, name: data.name },
        )
    }else{
      window.location.pathname = '/login';
      return null;
    }
  })
  .catch(err=> console.log(err))

}, [])



    return ( 
        <div className="AccountComponent wall">
            
{/* START NAV  */}
<Nav></Nav>
{/* END NAV */}


{/* SECTION ACCOUNT  */}
<section >
<div className="container-fluid pb-3 Cartbody">

      <div class="row flex-nowrap wall">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{maxHeight: "30rem"}} >
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
 
          
            <Link to="/myaccount"  class="d-flex  pb-3 mb-md-0 me-md-auto  text-decoration-none text-decoration-none">
          
              <span class=" fs-4 bi bi-person-circle d-none d-sm-inline text-white d-flex text-start pt-3"> <span style={{paddingLeft:"5px"}}>Your Account </span></span>
     
            </Link>
         
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center  align-items-sm-start" id="menu" >
              <li >
                <Link to='/order' class="nav-link align-middle px-0" style={{color:"white"}}>
                  <i class="fs-4 bi bi-basket-fill "   ></i> <span class="ms-1 d-none d-sm-inline"> Orders</span>
              
                </Link>
                
              </li>
              <li>
                <Link to='/accountDetails' class="nav-link px-0 align-middle" style={{color:"white"}}>
                  <i class="fs-4 bi bi-journal-richtext"></i> <span class="ms-1 d-none d-sm-inline">Account Details</span> 
                  </Link>
              </li>
              <li> 
                <Link to='/inbox' data-bs-toggle="collapse" class="nav-link px-0 align-middle" style={{color:"white"}}>
                  <i class="fs-4 bi bi-envelope-paper"></i> <span class="ms-1 d-none d-sm-inline">inbox</span> 
                  </Link>
              </li>
              <li>
                <Link to='/loginAndSecurity' class="nav-link px-0 align-middle" style={{color:"white"}}>
                  <i class=" fs-4 bi bi-person-lock"></i> <span class="ms-1 d-none d-sm-inline">login & Security</span>
                  </Link>
              </li>
              <li>
                <Link to='/address' class="nav-link px-0 align-middle"style={{color:"white"}} >
                  <i class=" fs-4 bi bi-geo-alt"></i> <span class="ms-1 d-none d-sm-inline">Address</span>
                  </Link>
              </li>
              <li >
                <Link  class="nav-link px-0 align-middle " style={{color:"white"}}>
                  <i class=" fs-4 bi bi-x-octagon"></i> <span class="ms-1 d-none d-sm-inline ">logout</span>
                </Link>
              </li>
            </ul>
          
          </div>
        </div>

        <div className="col ">
          <div className=' wall'>
            {/* <h3>  My Account </h3> */}
            <h3 className='text-capitalize pt-4'>{data.name}! Your Account</h3><br/>
          </div>

           <div className="container-fluid mx-4">
            <div className="row ">

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Link to='/order'>
                 <div class="card text-bg-primary mb-3" style={{maxWidth: "20rem"}}>
                     <div class="card-header " > Orders </div>
                         <p class="card-text p-4">Track and access your Orders</p>
                 </div>
                 </Link>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
                <Link to='/accountDetails '>
                <div class="card text-bg-primary mb-3" style={{maxWidth: "20rem"}}>
                     <div class="card-header " >  Account Details </div>
                         <p class="card-text p-4 ">Read, Edit and delete  your personal details</p>
                 </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div class="card text-bg-primary mb-3" style={{maxWidth: "20rem"}}>
                     <div class="card-header " > Inbox </div>
                         <p class="card-text p-4">Access all your messages</p>
                 </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <Link to='/loginAndSecurity'>
                <div class="card text-bg-primary mb-3" style={{maxWidth: "20rem"}}>
                     <div class="card-header " > login & Security </div>
                         <p class="card-text p-4">Modify your login detals </p>
                 </div>
                </Link>
              </div>


              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <Link to='/address'>
                 <div class="card text-bg-primary mb-3" style={{maxWidth: "20rem"}}>
                     <div class="card-header " > Address </div>
                         <p class="card-text p-4 ">Edit, delete and set default address</p>
                 </div>
                 </Link>
              </div>

            </div>
           </div>

        </div>

    </div> 
</div>



</section>
{/* END SECTION ACCOUNT */}


{/* START FOOTER  */}
<Footer></Footer>
{/* END FOOTER */}
        </div>
     );
}
 
export default Account;