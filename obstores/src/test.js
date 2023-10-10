// import { Link } from "react-router-dom";
// import axios from '../../axiosApi/axiosInstance'
// import { useEffect, useState } from "react";

// const Manageusers = () => {
//   axios.defaults.withCredentials = true;

//   const [data, setData] = useState([])
// useEffect(() =>{

//   axios.get('admin/allusers')
//   .then(res=> {

//     if(res.data.status === 'success'){
   
//       setData(res.data)
//     }
//   console.log(res.data)
//   })
//   .catch(err=> console.log(err));
// }, [])

//     return ( 
//         <div className="container pagecolor2">
//         <h4 class='text-start  pt-3  pb-3'> Users</h4>
//         <div className="container table-responsive">
//         <table class="table ">
//              <thead>
//                <tr>
//                  <th scope="col">User ID</th>
//                  <th scope="col">Name</th>
//                  <th scope="col">Address</th>
//                  <th scope="col">Gender</th>
//                  <th scope="col">Email</th>
//                  <th scope="col">Action</th>
//                  <th scope="col">Restrictioned</th>
//                </tr>
//              </thead>
//              <tbody class="table-group-divider">
//                <tr>
//                  <th scope="row">1</th>
//                  <td>chuks</td>
//                  <td>No ajah</td>
//                  <td>Male</td>
//                  <td>chuks@gmail.com</td>
//                  <td class=''>
//                     <Link class='fs-5 bi bi-trash '></Link>
//                     <Link class='fs-5 bi bi-pencil-square px-1 '></Link>
//                  </td>

//                  <td>
//                 <form>
//                  <div class="form-check form-switch ">
//                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
//                   </div>
//                  </form>
//                  </td>

//                </tr>
//                <tr>
//                  <th scope="row">2</th>
//                  <td>pot</td>
//                  <td>May 19th</td>
//                  <td>$30</td>
//                  <td>cancelled</td>
//                  <td>@mdo</td>
//                </tr>
   
//              </tbody>
//            </table>
//         </div>
//        </div>
//      );
// }
 
// export default Manageusers;