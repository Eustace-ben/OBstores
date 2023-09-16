

const Footer = () => {

    return ( 

<div className="FootComponent">


{/* <Remove the container if you want to extend the Footer to full width */}



  <footer class="bg-dark text-center text-lg-start text-white">
    {/* Grid container  */}
    <div class="container p-4 " >
      {/*Grid row*/}
      <div class="row mt-4  "  >
   
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">See other items</h5>

          <ul class="list-unstyled mb-0 ">
            <li>
              <a href="#!" class="text-white"><i class="bi bi-list-columns p-2"></i>Best selling Items</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="bi bi-chat-left-dots-fill p-2"></i>Customer Service</a>
            </li>
          </ul>
        </div>
      
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Execution of the contract</h5> 

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white"><i class="bi bi-truck p-2"></i>Supply</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="bi bi-x-octagon-fill p-2"></i>Refunds & Returns</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="bi bi-shield-check p-2"></i>Privacy policy</a>
            </li>
          </ul>
        </div>
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Address </h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">OBstores</a>
            </li>
            <li>
              <a href="#!" class="text-white">123 Street</a>
            </li>
            <li>
              <a href="#!" class="text-white">Lagos </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase"><i class="bi bi-chat-dots p-2"></i>Write to us</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white"><i class="bi bi-chat-dots p-2"></i>Help in purchasing</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="bi bi-envelope-at p-2"></i>Contact Us</a>
            </li>
          </ul>
        </div>
        {/*Grid column */}
      </div>
      {/* Grid row*/}
    </div>
    {/* Grid container */}

     {/* Copyright */}
    <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2021 Copyright:
      <a class="text-white" href='/'>OBstores.com</a>
    </div>
    {/* Copyright */}
  </footer>


{/* <!-- End of .container --> */}

</div>


     );
}
 
export default Footer;