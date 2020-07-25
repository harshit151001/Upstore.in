import React, { useContext } from 'react';
import Invoice from '../Cart/Invoice';
import Cartcard from '../Products/Cards/Cartcard';

import { appContext } from '../../Statemanagement/Statecontext';

const Cart = () => {
  const { state } = useContext(appContext);
  const { cart } = state;

  return (
    <div className="container-xl">
      <div className="row mt-4 mb-1">
        <div className="col-12">
          <div className="card d-none d-sm-block">
            <div className="card-body">
              <div className="row w-100 py-auto my-auto">
                <div className="col-8 my-auto">
                  <strong>My shopping bag:{`(${cart.length} items)`}</strong>
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
          {cart.map(({ wishlist, product, quantity, _id }) => (
            <Cartcard
              product={product}
              quantity={quantity}
              key={_id}
              wishlist={wishlist}
            />
          ))}
        </div>
        <div className="col-lg-3">
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default Cart;
