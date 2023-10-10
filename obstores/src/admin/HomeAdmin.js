import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import axios from '../axiosApi/axiosInstance'

const HomeAdmin = () => {
  
//JQUERY TO TOGGLE FUNCTION
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
});
 
  axios.defaults.withCredentials = true;

  // const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);

  //GET PROFILE ADMIN
  useEffect(() => {
      axios.get('/admin/adminprofile')
          .then(res => {
              if (res.data.status === "success") {
                   setProfile(res.data.data[0],{...profile , name:profile.name})
                 // console.log(res.data)
              }
          })
          .catch(err => console.log(err));
  }, []) 

  

  return (
    <div className="dashboardComponent p-0 m-0">

      <div class="wrapper ">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" class='bg-dark  '>
          <div class="sidebar-header bg-dark tC ">
            <h5>OBstores</h5>
          </div>
          <div className='line'></div>

          <ul class="list-unstyled components " id="menu" >
            <li className='pb-3  mx-4 d-flex text-start'>
              <Link to='/admin/dashboard' class="nav-link  px-0" style={{ color: "white" }}>
                <i class="px-3  fs-4 bi bi-motherboard "   ></i> <span > Dashboard</span>
              </Link>
            </li>

            <li className='pb-3 mx-4 d-flex text-start'>
              <Link to='/admin/manageUsers' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                <i class=" px-3  fs-4 bi bi-people"></i> <span >Manage Users</span>
              </Link>
            </li>

            <li className='pb-3  mx-4 d-flex text-start'>
              <Link to='/admin/manageproducts' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                <i class="px-3  fs-4 bi bi-box-seam-fill"></i> <span >Manage Products</span>
              </Link>
            </li>

            <li className='pb-3 mx-4 d-flex text-start'>
              <Link to='/admin/orders' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                <i class="px-3  fs-4 bi bi-basket-fill"></i> <span >Orders</span>
              </Link>
            </li>

            <li className='pb-3 mx-4 d-flex text-start'>
              <Link to='/admin/chart' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                <i class="px-3 fs-4 bi bi-kanban-fill"></i> <span> Chart </span>
              </Link>
            </li>

            <li className='pb-3 mx-4 d-flex text-start'>
              <Link to='/admin/messages' class="nav-link px-0 align-middle" style={{ color: "white" }} >
                <i class="px-3 fs-4 bi bi-envelope-paper"></i> <span>Messages</span>
              </Link>
            </li>

            <li className=' mx-4 d-flex text-start'>
              <Link class="nav-link px-0 align-middle " style={{ color: "white" }}>
                <i class=" px-3  fs-4 bi bi-x-octagon"></i> <span>logout</span>
              </Link>
            </li>
            <div class="sidebar-foot ">
              <i class=" fs-4 bi bi-person w-100 "></i> <span class='text-capitalize'>{profile.name}</span>
              {/* <span class="px-3 fs-5 bi bi-person "> Eustace</span> */}
              <br />
              <div class=" lt ">ADMINSTRATOR</div>
            </div>
          </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content">
          <nav className=" navbar navbar-expand-sm navColor position-relative overf d-flex" id="neubar">
            {/* <div className="container-fluid d-flex justify-content-end"> */}
            <div className="container-fluid d-flex ">
              <button type="button" id="sidebarCollapse" class="btn ">
                <i class="bi bi-list cartIcon "></i>
              </button>
              <Link class="nav-admin mt-2 " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-power cartIcon " ></i>
              </Link>
            </div>
          </nav>


          {/* CONTENT    */}
          <Outlet />
          {/* CONTENT   */}
        </div>
      </div>

    </div>
  );
}

export default HomeAdmin;


