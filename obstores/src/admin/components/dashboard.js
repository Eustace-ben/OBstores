import { Link } from "react-router-dom";
import axios from '../../axiosApi/axiosInstance'
import { useEffect, useState } from "react";

const Dashboard = () => {

    axios.defaults.withCredentials = true;

    const [data, setData] = useState([]);
    const [profile, setProfile] = useState([]);
    const [empty, setEmpty] = useState('');
    const [error, setError] = useState('');

    //GET PROFILE ADMIN
    useEffect(() => {
        axios.get('/admin/adminprofile')
            .then(res => {
                if (res.data.status === "success") {
                     setProfile(res.data.data[0],{...data , name:data.name})
                }
            })
            .catch(err => console.log(err));
    }, [])

    //GET RECENT USERS
    useEffect(() => {

        axios.get('/admin/recentusers')
        .then(res=> {
            //console.log(res.data)
          if(res.data.status === "success"){
            setData(res.data.data)
          }else if(res.data.status === "empty"){
            setEmpty(res.data.message)
          }else{
            setError(res.data.Error)
          }
        })
            .catch(err => console.log(err));
    }, [])


    return (

        <div class="container-fluid pagecolor">
            <div class='container-fluid '>
                <div class='row pt-2 pb-4'>
                    <div class='col col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                        <h4> DashBoard</h4>
                        Welcome back, <span class='text-capitalize'> {profile.name} </span>! We've missed you. 👋
                    </div>
                    <div class='col col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                        <Link class='btn btn-sm btn-primary'> Today: Sep 24th</Link>
                    </div>
                    <hr />
                </div>

                <div class="row ">
                    <div class="col-xl-3 col-lg-3 col-lg-4">
                        <div class="card l-bg-cherry text-white">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                                <div class='row'>
                                    <div class="col-9">
                                        <h6 class="d-flex text-start mb-0">
                                            Sales Today
                                        </h6>
                                    </div>
                                    <div class="col-3 text-right">
                                        <span class="text-end badge bg-secondary text-wrap tSS">Today </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2 d-flex pt-2">
                                    <div class="text-start pb-2">
                                        <h4 class="d-flex align-items-center mb-0">
                                            320
                                        </h4>
                                    </div>
                                    <div class=" text-start">
                                        <span>5.23% <span class='tS'> since last month</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-lg-4">
                        <div class="card l-bg-blue-dark text-white">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                                <div class='row'>
                                    <div class="col-8">
                                        <h6 class="d-flex text-start mb-0">
                                            Total Earnings
                                        </h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span class="text-end badge bg-secondary text-wrap tSS">Annual </span>
                                    </div>
                                </div>

                                <div class="row align-items-center mb-2 d-flex pt-2">
                                    <div class="text-start pb-2">
                                        <h4 class="d-flex align-items-center mb-0">
                                            15.07k
                                        </h4>
                                    </div>
                                    <div class=" text-start">
                                        <span>9.23%  <span class='tS'> since last month</span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-lg-4">
                        <div class="card l-bg-green-dark text-white">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                                <div class='row'>
                                    <div class="col-8">
                                        <h6 class="d-flex text-start mb-0">
                                            Vistors
                                        </h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span class="text-end badge bg-secondary text-wrap tSS ">Annual </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2 d-flex pt-2">
                                    <div class="text-start pb-2">
                                        <h4 class="d-flex align-items-center mb-0">
                                            3,243
                                        </h4>
                                    </div>
                                    <div class=" text-start">
                                        <span>12.5%  <span class='tS'> since last month</span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-lg-4">
                        <div class="card l-bg-orange-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                                <div class='row'>
                                    <div class="col-8">
                                        <h6 class="d-flex text-start mb-0">
                                            Pending Orders
                                        </h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <span class="text-end "> </span>
                                    </div>
                                </div>
                                <div class="row align-items-center mb-2 d-flex pt-2">
                                    <div class="text-start pb-2">
                                        <h4 class="d-flex align-items-center mb-0">
                                            25
                                        </h4>
                                    </div>
                                    <div class=" text-start">
                                        <span>2.5%  <span class='tS'>  since last month</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* START USERS SECTION */}
                <div className="container pagecolor2">
                    <h4 class='text-start  pt-3  pb-3'> Latest Users</h4>
                    <div className="container table-responsive">
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <h6 className="text-warning">{empty && empty}</h6>
                            <h6 className="text-danger">{error && error}</h6>
                            <tbody class="table-group-divider">
                           
                                {
                                    data.map((data) =>(
                                        <tr key={data.id}>
                                        {/* <th scope="row">{data.id}</th> */}
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.email}</td>
                                        <td>{data.Date_time}</td>
                                    </tr>
                                    ))
                                }
                              
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* START USERS SECTION */}
            </div>

        </div>

    );
}

export default Dashboard;