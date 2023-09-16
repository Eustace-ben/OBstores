
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './axiosApi/axiosInstance';

const EditDetails = () => {


// const [error, setError] = useState('')
 const[data, setData] = useState({
    name : '',
    gender : '',
    email : '',
 })

//DISPLAY CONTENTS
const Navigate = useNavigate();
axios.defaults.withCredentials = true;

useEffect(() =>{
    axios.get('/myaccount')
    .then(res => {
        if(res.data.status === "success" ){
            setData(res.data.data[0], {...data, name: data.name },
                {...data, gender: data.gender },
                {...data, email: data.email }
                )
        }
    })
    .catch(err => console.log(err))
},[])



//UPDATE DETAILS
    const {id} = useParams();
    const handleSubmit = (e) =>{
        e.preventDefault();
       axios.put('/update/'+id , data)
       .then(res => {
           if(res.data.status === "success" ){
            Navigate('/accountDetails')
           }else{
               console.log('error occured')
           }
       })
       .catch(err=> console.log(err))
    }  
    return ( 
        <div className="editDetailComponent">

            <div className='container'>
            <Link to='/accountDetails'><h6 className='mt-5 d-flex text-start'>back</h6></Link> 
            <h3 className=' mb-3 '> Edit Personal Details  </h3>
            </div>
           
            <div>
                <h5 className="text-danger"> </h5>
            </div>
            <div className="card d-grid gap-2 col-6 mx-auto">

                <form onSubmit={handleSubmit}  className="mb-3" >
                     <div className="text-danger">
                        {/* <p>{error && error}</p> */}
                     </div>
                    <div className="mb-3 ">
                        <label htmlFor="name" className="form-label fw-bold">Name</label>
                        <input type="text" className="form-control"
                        value={data.name}
                        onChange={(e)=>setData({...data, name: e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label fw-bold"> Gender</label>
                        <input type="text" className="form-control"
                        value={data.gender}
                        onChange={(e)=>setData({...data, gender: e.target.value})}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold ">Email address</label>
                        <input type="email" className="form-control "
                        value={data.email} 
                        onChange={(e)=>setData({...data, email: e.target.value})}
                        />
                    </div>
                    <button className=" btn btn-sm btn-primary w-50" type="submit">Submit</button>
                </form>
            </div>

        </div>
     
     );
}
 
export default EditDetails;