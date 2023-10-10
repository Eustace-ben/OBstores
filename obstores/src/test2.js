import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const HomeAdmin = () => {
  return (
    <div className="dashboardComponent">

      <div class="container-fluid">
        
        <div class="row flex-nowrap ">   
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"  >
            <div class="d-flex flex-column align-items-center align-items-sm-start  pt-2 " style={{ maxHeight: '90vh' }}>

              < Link to='/admin/dashboard' className="navbar-brand  pt-3 pb-3 mb-md-0 me-md-auto tC "> 
             <strong> OBstores </strong> 
              </Link>
              <div className='line'></div>

              <ul class="nav list-text nav-pills flex-column mb-sm-auto mb-0 align-items-center  align-items-sm-start " id="menu" >
                <li  className='pb-3'>
                  <Link to='/admin/dashboard' class="nav-link align-middle px-0" style={{ color: "white" }}>
                    <i class="fs-4 bi bi-motherboard "   ></i> <span class="ms-1 d-none d-sm-inline"> Dashboard</span>
                  </Link>
                </li>

                <li  className='pb-3 '>
                  <Link to='/admin/manageUsers'  class="nav-link px-0 align-middle" style={{ color: "white" }}>
                    <i class=" fs-4 bi bi-people"></i> <span class="ms-1 d-none d-sm-inline">Manage Users</span>
                  </Link>
                </li>

                <li  className='pb-3 '>
                  <Link to='/admin/products' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                    <i class=" fs-4 bi bi-box-seam-fill"></i> <span class="ms-1 d-none d-sm-inline">Manage Products</span>
                  </Link>
                </li>

                <li  className='pb-3 '>
                  <Link to='/admin/orders' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                    <i class=" fs-4 bi bi-basket-fill"></i> <span class="ms-1 d-none d-sm-inline">Orders</span>
                  </Link>
                </li>

                <li  className='pb-3 '>
                  <Link to='/admin/chart' class="nav-link px-0 align-middle" style={{ color: "white" }}>
                    <i class="fs-4 bi bi-kanban-fill"></i> <span class="ms-1 d-none d-sm-inline "> Chart </span>
                  </Link>
                </li>

                <li  className='pb-3 '>
                  <Link to='/address' class="nav-link px-0 align-middle" style={{ color: "white" }} >
                    <i class=" fs-4 bi bi-envelope-paper"></i> <span class="ms-1 d-none d-sm-inline">Messages</span>
                  </Link>
                </li>

                <li  className=' '>
                  <Link class="nav-link px-0 align-middle " style={{ color: "white" }}>
                    <i class=" fs-4 bi bi-x-octagon"></i> <span class="ms-1 d-none d-sm-inline ">logout</span>
                  </Link>
                </li>
              </ul>
            </div>
        {/* SIDEBAR  FOOTER */}
               <div className='Sidebarfooter w-100 text-start px-3'>
                  <i class=" fs-4 bi bi-person w-100 "></i> <span class="ms-1 d-none d-sm-inline">Eustace</span>
                  <br/>
                  <div class=" lt ms-1 d-none d-sm-inline ">ADMINSTRATOR</div>
               </div>
          </div>

          <div className="col p-0 m-0">
            <div className=' mb-4'>
              {/* START ADMIN NAV BAR */}
              <nav className="navbar navbar-expand-sm navColor position-relative overf d-flex " id="neubar">
                <div className="container d-flex justify-content-end">
                  <div id="navbarNavDropdown">
                    <ul class="navbar-nav   flex-row  ">
                      <li class="nav-link-admin dropdown ">
                        <Link class="nav-admin mt-2 " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-power cartIcon " ></i>
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          <li><Link to='' class="dropdown-item" >logout</Link></li>
                        </ul>
                      </li>
                      <li class="nav-admin  ">
                        <Link aria-current="page"><i class="bi bi-person-circle cartIcon " ></i></Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </nav>
              {/* END ADMIN NAV BAR */}
            </div>

            <Outlet/>
          </div>
        </div>

      </div>

    </div>


  );
}

export default HomeAdmin;


