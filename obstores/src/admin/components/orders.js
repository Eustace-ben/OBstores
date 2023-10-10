import {Link} from 'react-router-dom'
const Order = () => {

  return (
    <div className="container ">

                <div class='row pt-2 pb-4'>
                    <div class=' col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                        <h4> Orders</h4>
                    </div>
                    <div class=' col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                        <Link class='btn btn-sm btn-primary bi bi-plus-lg'> New Orders</Link>
                    </div>
                    <div class='pt-2'> <hr />  </div>
                </div>

      <div className="pagecolor table-responsive">


        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              <th scope="col">Payment Method</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>pot</td>
              <td>april 21th</td>
              <td>$50</td>
              <td>shipped</td>
              <td>Mastercard</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>pot</td>
              <td>May 19th</td>
              <td>$30</td>
              <td>cancelled</td>
              <td>Visa</td>
              <td>@mdo</td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Order;