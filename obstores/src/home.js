import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from './nav';
import Footer from './footer';






const Home = () => {


    return ( 
        <div className="Homecontent">

{/* START NAV  */}
  
  <Nav/>
     
{/* END NAV */}

 {/* START CONTAINER ALL SECTIONS */}
 <div className='container-fluid '> 

 {/* START SECTION A */}
 <section className='sectionA mt-2'>
 

 <div className='container-fluid pb-3'>
  <div className='row'>

    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/cup.png'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>
 
    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/pots.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>

    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/pan.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>
 
    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/spoon.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>
  

 {/* ERROR TESTING */}







 <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/pan.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>

 <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/cup.png'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>
 
    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/pots.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>


    <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div class="card-sC">
                  <div class="card-image">
                        <img src='./images/spoon.jpg'/>
                  </div>
                    <a class="card-effect" href="#"><i class="bi bi-bag-heart"></i></a>
                  <div class="card-heading">
                        Cup RA
                  </div>
                  <div class="card-text">
                    <span> <a href="#" class="card-button">$100  Purchase</a>  </span>
                  </div>
                </div>
    </div>
    
  </div>
</div>


 </section>
{/* END SECTION A */}

{/* START SECTION B  */}
<section className='sectionB'>

    
</section>
{/* END SECTION B */}





 </div>
 {/* END CONATINER ALL SECTIONS */}



 {/* START FOOTER */}

   <Footer></Footer>

 {/* END FOOTER */}



        </div>
     );
}
 
export default Home;