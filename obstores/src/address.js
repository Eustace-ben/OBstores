import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Address = () => {
    return ( 
        <div className="addressComponent">
{/* START NAV  */}
<Nav></Nav>
{/* END NAV */}
     




{/* START SECTION */}
<section>

<h3 className='text-center pt-4'> Manage Your Contact Information</h3>
<div className="container d-flex justify-content-center pt-4 pb-5">

<div className="card border-success mb-3 d-flex text-start " style={{maxWidth: "40rem", minWidth: "30vw"}}>
  <div className="card-header text-bg-light border-secondary p-4  fs-6 fw-bold">Account Holder : Chuks</div>
  <div className="card-body text-secondary ">
    <ul className="list-group list-group-flush">
    <li className="list-group-item pb-3 fs-6 fw-semibold">AddressLine1 :</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold"> AddressLine2 :</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold">city :</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold">postcode : </li>
    <li className="list-group-item pb-3 fs-6 fw-semibold"> country :</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold">Mobile Number :</li>
    <li className="list-group-item pb-3 fs-6 fw-semibold">Telephone : *******</li>
  </ul>
  </div>
  <Link  to ='/editAddress' className="card-footer btn btn-secondary border-success "> Edit Details <span className='fs-2 bi bi-pencil-square mx-5'></span></Link>
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
 
export default Address;