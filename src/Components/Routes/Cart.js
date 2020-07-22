import React from 'react';
import Invoice from '../Cart/Invoice';
import Cartcard from '../Products/Cards/Cartcard';
const Cart = () => {
  return (
    <div className="container-xl">
      <div className="row mt-4 mb-1">
        <div className="col-12">
          <div class="card d-none d-sm-block">
            <div class="card-body">
              <div className="row w-100 py-auto my-auto">
                <div className="col-8 my-auto">
                  <strong>My shopping bag:(3 items)</strong>
                </div>
                <div className="col-4  my-auto text-right">
                  <strong>&#x20b9; 1000</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <Cartcard />
          <Cartcard />
          <Cartcard />
        </div>
        <div className="col-lg-3">
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default Cart;
