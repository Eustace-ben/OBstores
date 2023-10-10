import { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
import axios from '../axiosApi/axiosInstance';
import { useNavigate } from 'react-router-dom';



const Access = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  
//PROTECTED ROUTE
useEffect(()=>{
  axios.get('/admin/proute')
  .then(res => {
    if(res.data.status !== "success"){
      navigate('/login')
    }
  })
  .catch(err=> console.log(err))
},[])




const [error, setError]  = useState('');

const [data, setData] = useState({
    email : '',
    adminAccesstoken : ''
})


//HANDLE LOGIN
const handlesubmit = (e) =>{
    e.preventDefault();
    axios.post('/admin/access', data)
    .then(res=> {
      //console.log(res)
       if(res.data.status === "success"){
        navigate('/admin/dashboard')
       }else{
        setError(res.data.Error)
       }
    })
    .catch(err => console.log(err))

}

    return ( 
        
        <div className="accessComponent">
            <div className="container loginContainer">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-3" onSubmit={handlesubmit}>

            <div className="text-center">
            <h4 className="text-center text-dark mt-3 mb-3 logheads">Admin Login </h4>
              <img src="./images/adminPic.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>
               <p className="text-danger">{error && error}</p>
            <div className="mb-3">
              <input type="email" className="form-control form-control1"
                placeholder="Email Address"
                onChange={ (e)=> setData({...data, email: e.target.value})}
              
                ></input>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control form-control1"  placeholder="Admin Access Token"
                onChange={ (e)=> setData({...data, adminAccesstoken: e.target.value})}
              ></input>
            </div>
            <div className="text-center">
                <div className="d-grid   mx-auto">
                  <button className="btn  btn-mycolor"  type="submit">Button</button>
               </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
        </div>
     );
}
 
export default Access;