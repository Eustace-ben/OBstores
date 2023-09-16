import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from '../src/axiosApi/axiosInstance';
// import axios from 'axios';

const Register = () => {

const [data, setData] = useState({
  name: '',
  gender: '',
  email: '',
  password: '',
  cPassword: '',
})
const [error, setError] = useState();
const Navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('/register', data)
    .then(res=> {
       if(res.data.status === "Success"){
        Navigate('/login')
       }else{
        setError(res.data.Error)
       }
    })
    .catch(error => {
      console.log(error)
    })
  

  }
    return ( 

<div class="container loginContainer">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-3">

          <form class="card-body cardbody-color p-lg-3" onSubmit={handleSubmit}>

            <div class="text-center">
            <h4 class="text-center text-dark mt-2 mb-2 logheads"> Register </h4>
              <img src="./images/lock.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>
            <p className="text-danger"> {error && error}</p>         
            <div class="mb-2">
              <input type="text" class="form-control form-control1"
                placeholder="Name"
                onChange={(e)=> setData({...data, name : e.target.value})}
                ></input>
      
            </div>
            <div class="mb-2">
              <input type="text" class="form-control form-control1"
                placeholder="Gender"
                onChange={ (e)=> setData({...data, gender: e.target.value})}
                ></input>
            </div>
            <div class="mb-2">
              <input type="email" class="form-control form-control1"
                placeholder="Enter Email" 
                onChange={(e)=> setData({...data, email: e.target.value})}
                ></input>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control form-control1"  placeholder="Password"
               onChange={ (e)=> setData({...data, password: e.target.value})}
              ></input>
            </div>
            <div class="mb-2">
              <input type="Password" class="form-control form-control1"
                placeholder="Confirm Password"
                onChange={(e)=> setData({...data, cPassword: e.target.value})}
                ></input>
            </div>
            <div class="text-center">
                <div class="d-grid mx-auto">
                  <button class="btn btn-mycolor"  type="submit">Register</button>
               </div>
            </div>
            <div id="emailHelp" class="form-text text-center mb-3 text-dark">Already
              Registered? <Link to='/login' class="text-dark fw-bold"> Sign In to your Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


     );
}
 
export default Register;