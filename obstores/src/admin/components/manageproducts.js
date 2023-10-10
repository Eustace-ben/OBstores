import { Link } from "react-router-dom";
import axios from '../../axiosApi/axiosInstance'
import { useEffect, useState } from "react";


const Products = () => {
  axios.defaults.withCredentials = true;

  const [data, setData] = useState([]);
  //GET ALL USERS
useEffect(() =>{

  axios.get('/admin/displayAllproduct')
  .then(res=> {
    if(res.data.status === "success"){
      setData(res.data.data)
    }
  })
  .catch(err=> console.log(err));
}, [])

//DELETE A USER
const handledelete = (product_id)=>{
   axios.delete('/admin/deleteproduct/'+product_id)
   .then(res => {
    if(res.data.status === 'success')
    window.location.reload();
   })
   .catch(err => console.log(err))
  
}

    return ( 
        <div className="product">
          <div className="container">
          
        
           <h4 class='text-start  pt-3  pb-3'> Products</h4>
           <Link to='' className=" btn btn-sm btn-primary w-20" ><span class='d-flex text-start bi bi-plus-square'> </span> Add New Products </Link>
        <div className="container table-responsive">
        <table class="table ">
             <thead>
               <tr>
                 <th scope="col">User ID</th>
                 <th scope="col">Product_id</th>
                 <th scope="col">Name</th>
                 <th scope="col">Brand</th>
                 <th scope="col">Colors</th>
                 <th scope="col">Product_desc</th>
                 <th scope="col">Cartgory_no</th>
                 <th scope="col">Image</th>
                 <th scope="col">Price</th>
                 <th scope="col">Sold</th>
                 <th scope="col">Product_Date</th>
                 <th scope="col">Action</th>
               </tr>
             </thead>
             <tbody class="table-group-divider">
            {data.map((data)=>(
              
             
                 <tr key={data.id}>
                 <th scope="row">{data.user_id}</th>
                  <td>{data.product_id}</td>
                  <td>{data.name}</td>
                  <td>{data.brand}</td>
                  <td>{data.colors}</td>
                  <td>{data.product_desc}</td>
                  <td>{data.cartgory_no}</td>
                  <td>{data.image}</td>
                  <td>{data.price}</td>
                  <td>{data.sold}</td>
                  <td>{data.productDate}</td>
                  <td >
                     <Link class='h4 bi bi-trash text-danger ' onClick={()=> handledelete(data.product_id)}></Link>
                     <Link to={`/admin/productedit/${data.id}`}  class='h4 bi bi-pencil-square px-1 text-info'></Link>
                  </td>
               </tr>
 ))}
             </tbody>
           </table>
           
        </div>
        </div>
        </div>
     );
}
 
export default Products;