import Nav from './nav';
import Footer from './footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Detail = () => {


    return ( 
<div className='detailComponent'>
{/* START NAV  */}
<Nav></Nav>
{/* END NAV */}

    
 <div className="Cartbody">



{/* START DETAILS SECTION */}
         <section>

<div className="container mb-5">
 <div className='row'>


 {/* CAROUSEL SECTION 1 */}

<div className="col-lg-4 col-md-6 col-sm-12 mt-2">
<div className='px-3'>
<div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
  <img src='/images/bg.jpg' class="d-block w-100" ></img>
  </div>
  <div class="carousel-item">
  <img src='/images/bg.jpg' class="d-block w-100" ></img>
  </div>
  <div class="carousel-item">
    <img src='/images/bg.jpg' class="d-block w-100" ></img>
  
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
</div>
</div>

{/* CAROUSEL SECTION 2 */}

<div className="col-lg-4 col-md-4 col-sm-12 mt-2 ">
  <div className='container  ibox-content' >
  <p className='fs-5'>Description</p>
    <p>mCover Hard Shell Case ONLY Compatible for 2021~2022 15.6" 
       x360 15-ERxxxx Series (NOT Compatible with Other Series) Convertible
       </p>
  </div>
</div>


{/* CAROUSEL SECTION 3 */}

<div className="col-lg-4 col-md-4 col-sm-12 mt-2">
  <div className='conatiner ibox-content'>
  <p className='fs-5'> OBstores express delivery</p>
    <p> $20.7 </p>
    <p>In Stock : 3</p>
    <p> delivery to :  chris</p>
    <p>location : lagos</p>
    <div class="d-grid gap-2">
  <Link to='/cart'  class="btn btn-primary" type="button">Add to Cart</Link>
  <Link to='/checkout'  class="btn btn-primary" type="button">buy Now</Link>
    </div>
    <p className='p-5 pb-5'> <i class="bi bi-arrow-return-left" style={{}} > Return Policy</i><br/>
    Free return within 15 days for Official Store items and 7 days for other eligible items
    </p>
    <p>SELLER INFORMATION</p>
     <p> Samuel autos</p>
     <p>SELLER PERFORMANCE</p>
       <p> excellent </p>
  </div>
</div>



 </div>
</div>
  </section>

{/* END DETAIL SECTION */}

{/* START SECTION 2 */}
<section>
<div className="container pt-5">

</div>
</section>
{/* END SECTION 2 */}

</div>
{/* START FOOTER  */}
<Footer></Footer>
{/* END FOOTER */}
</div>

 
     );
}
 
export default Detail;