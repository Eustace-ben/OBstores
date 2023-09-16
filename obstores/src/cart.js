import Nav from './nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  {Link} from 'react-router-dom';

const Cart = () => {
    return ( 

 <div className="cartComponent">
   {/* START NAV  */}
    <Nav></Nav>
   {/* END NAV */}

    
        <div className=" Cartbody">


       <div class="container">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-md-9">
            <div class="ibox">
                <div class="ibox-title">
                    <span class="float-end">(<strong>5</strong>) items</span>
                    <h5 class="float-start" >Items in your cart</h5>
                </div>
                <div class="ibox-content">
                    <div class="table-responsive">
                        <table class="table shoping-cart-table">
                            <tbody>
                            <tr>
                                <td width="90">
                                    <div class="cart-product-imitation">
                                        <img src='/images/bg.jpg ' className='w-100'/>
                                    </div>
                                </td>
                                <td class="desc">
                                    <h3>
                                    <a href="#" class="text-navy">
                                        Desktop publishing software
                                    </a>
                                    </h3>
                                    <p class="small">
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    </p>
                                    <dl class="small m-b-none">
                                        <dt>Description lists</dt>
                                        <dd>A description list is perfect for defining terms.</dd>
                                    </dl>

                                    <div class="m-t-sm">
                                        <Link href="#" class="text-muted"><i class="bi bi-gift-fill"></i> Add gift package </Link>
                                        |
                                        <Link to='' class="text-muted"> <i class=" bi bi-trash-fill "></i> Remove item </Link>
                                    </div>
                                </td>

                                <td>
                                    $180,00
                                    <s class="small text-muted"> $230,00 </s>
                                </td>
                                <td width="65">
                                    <input type="text" class="form-control" placeholder="1"/>
                                </td>
                                <td>
                                    <h4>
                                        $180,00
                                    </h4>
                                </td>
                            </tr>
                            </tbody>
                        </table> 
                {/* <div class="btn-group pb-5 d-lg-none">
                    <Link to='/' class="btn border btn-white float-start"> <i class="bi bi-arrow-return-left"></i> Continue shopping</Link>
                    <Link to='/checkout' class="btn btn-sm btn-primary float-end"><i class="bi bi-cart-check"></i> Checkout</Link>
                </div> */}
                    </div>

                </div>
               
                <div class="ibox-content pb-5 d-none d-lg-block"> 
                    <Link to='/' class="btn border btn-white float-start"> <i class="bi bi-arrow-return-left"></i> Continue shopping</Link>
                    <Link to='/checkout' class="btn btn-sm btn-primary float-end"><i class="bi bi-cart-check"></i> Checkout</Link>
                </div>

                <div class="btn-group pb-5 d-lg-none">
                    <Link to='/' class="btn border btn-white float-start"> <i class="bi bi-arrow-return-left"></i> Continue shopping</Link>
                    <Link to='/checkout' class="btn btn-sm btn-primary float-end"><i class="bi bi-cart-check"></i> Checkout</Link>
                </div>

            </div>

        </div>
        <div class="col-md-3">
            <div class="ibox">
                <div class="ibox-title">
                    <h5>Cart Summary</h5>
                </div>
                <div class="ibox-content">
                    <span>
                        Total
                    </span>
                    <h2 class="font-bold">
                        $390,00
                    </h2>

                    <hr/>
                    <span class="text-muted small">
                        *For United States, France and Germany applicable sales tax will be applied
                    </span>
                    <div class="m-t-sm mb-4">
                        <div class="p-3">
                        <Link to='/checkout' class="btn btn-primary btn-sm float-start "><i class="bi bi-cart-check"></i> Checkout</Link>
                        <a href="#" class="border btn btn-white float-end"> Cancel</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ibox">
                <div class="ibox-title">
                    <h5>Support</h5>
                </div>
                <div class="ibox-content text-center">
                    <h3><i class="fa fa-phone"></i> +43 100 783 001</h3>
                    <span class="small">
                        Please contact with us if you have any questions. We are avalible 24h.
                    </span>
                </div>
            </div>

        </div>
    </div>
</div>
</div>



   </div>
</div>
     );
}
 
export default Cart;