import { Link, useParams } from "react-router-dom";
import axios from '../../axiosApi/axiosInstance'
import { useEffect, useState } from "react";

const Manageusers = () => {
  axios.defaults.withCredentials = true;

  const [data, setData] = useState([]);
  //GET ALL USERS
useEffect(() =>{

  axios.get('/admin/allusers')
  .then(res=> {
    if(res.data.status === "success"){
      setData(res.data.data)
    }
  })
  .catch(err=> console.log(err));
}, [])

//DELETE A USER
const handledelete = (id)=>{
   axios.delete('/admin/deleteuser/'+id)
   .then(res => {
    if(res.data.status === 'success')
    window.location.reload();
   })
   .catch(err => console.log(err))
  
}

    return ( 
        <div className="container pagecolor2">
                
        <h4 class='text-start  pt-3  pb-3'> Users</h4>
        <div className="container table-responsive">
        <table class="table ">
             <thead>
               <tr>
                 <th scope="col">User ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Gender</th>
                 <th scope="col">Email</th>
                 <th scope="col">Role</th>
                 <th scope="col">Action</th>
                 <th scope="col">Restrictioned</th>
               </tr>
             </thead>
             <tbody class="table-group-divider">
            {data.map((data)=>(
              
             
                 <tr key={data.id}>
                 <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.role}</td>
                  <td >
                     <Link class='h4 bi bi-trash text-danger ' onClick={()=> handledelete(data.id)}></Link>
                     <Link to={`/admin/useredit/${data.id}`}  class='h4 bi bi-pencil-square px-1 text-info'></Link>
                  </td>

                 <td>
                 <div class="form-check form-switch ">
                   <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                   <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                 </div>
                 </td>
               </tr>
 ))}
             </tbody>
           </table>
           
        </div>
       </div>
     );
}
 
export default Manageusers;