import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './axiosApi/axiosInstance'



const AccountDetail = () => {

axios.defaults.withCredentials = true;
const [data, setData] = useState([]);
useEffect(() =>{

    axios.get('myaccount')
    .then(res => {

        if(res.data.status === "success" ){
            setData(res.data.data[0], {...data, name: data.name }
                // {...data, name: data.email },
                )
        }
    })
    .catch(err => {
        console.log(err)
    })
}, [])
    return ( 

        <div className="accDetailsComponent">
{/* START NAV  */}
<Nav></Nav>
{/* END NAV */}



{/* START SECTION */}
<section>



<h4 className='text-center pt-3'> Manage Your Personal Information</h4>
<div className="container d-flex justify-content-center pt-5 pb-5 ">
<div className="card border-success mb-3 d-flex text-start " style={{maxWidth: "40rem", minWidth: "30vw"}}>
  <div className="card-header text-bg-light border-secondary p-4 fs-6 fw-bold text-capitalize">Account Holder : {data.name} </div>
  <div className="card-body text-secondary ">
    <ul className="list-group list-group-flush">
    <li className="list-group-item pb-3 fs-6 fw-semibold">Full Name : {data.name}</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold"> Gender : {data.gender}</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold">Email : {data.email}</li>
    {/* <li className="list-group-item pb-3 fs-6 fw-semibold">Change Psssword : *******</li> */}
  </ul>
  </div>
  <Link  to ={`/editDetails/${data.id}`} className="card-footer btn btn-secondary border-success "> Edit Details <span className='fs-2 bi bi-pencil-square mx-5'></span></Link>
</div>
</div>


</section>
{/* END SECTION */}




{/* START FOOTER  */}
<Footer></Footer>
{/* END FOOTER */}
        </div>
     );
}
 
export default AccountDetail;