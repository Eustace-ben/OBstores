import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../src/axiosApi/axiosInstance';

const Login = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();






// //PROTECTED ROUTE
useEffect(()=>{
  axios.get('/myaccount')
  .then(res => {
    if(res.data.status === "success"){
      navigate(-1)
    }
  })
  .catch(err=> console.log(err))
},[])


  const [data, setData] = useState({
    email: '',
    password: '',
  })
 
  const [error, setError] = useState();
  const handlesubmit = (e)=>{
    e.preventDefault();

    axios.post('/login', data)
    .then((res)=> {
      if(res.data.role === "admin"  ){
       navigate('/access')
      } else if(  res.data.status === "success" ){
        navigate('/')  
      }else{
        setError(res.data.Error)
      } 
    })
    .catch((err)=> console.log(err));
  }
    return ( 
<div className="loginComponent">


<div class="container loginContainer">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-3" onSubmit={handlesubmit}>

            <div class="text-center">
            <h4 class="text-center text-dark mt-3 mb-3 logheads">User Login </h4>
              <img src="./images/lock.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>
               <p className="text-danger">{error && error}</p>
            <div class="mb-3">
              <input type="email" class="form-control form-control1"
                placeholder="Email Address"
                onChange={(e)=> setData({...data, email: e.target.value})}
                ></input>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control form-control1"  placeholder="Password"
                onChange={(e)=> setData({...data, password: e.target.value})}
              ></input>
            </div>
            <div class="text-center">
                <div class="d-grid   mx-auto">
                  <button class="btn  btn-mycolor"  type="submit">Button</button>
               </div>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <Link to='/register' class="text-dark fw-bold"> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>


</div>
     );
}
 
export default Login;