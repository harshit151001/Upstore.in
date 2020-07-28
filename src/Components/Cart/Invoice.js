import React, { useContext } from 'react';
import { appContext } from '../../Statemanagement/Statecontext';

const Invoice = () => {
  const { state } = useContext(appContext);
  const { cart } = state;
  return (
    <div className="card mt-3">
      <div className="card-body">
        <strong style={{ color: 'rgba(20, 20, 20)' }}>Price details:</strong>
        <hr />
        <div
          className="d-flex justify-content-between "
          style={{ color: 'silver' }}
        >
          <span>Bag total</span>
          <span>
            &#x20b9;
            {cart
              .map((item) => item.product.markedPrice)
              .reduce((prev, current) => prev + current, 0)}
          </span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ color: '#ec436f' }}
        >
          <span>Discount</span>
          <span>
            -&#x20b9;
            {cart
              .map((item) => item.product.markedPrice)
              .reduce((prev, current) => prev + current, 0) -
              cart
                .map((item) => item.product.price)
                .reduce((prev, current) => prev + current, 0)}
          </span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ color: 'silver' }}
        >
          <span>Order total</span>
          <span>
            &#x20b9;
            {cart
              .map((item) => item.product.price)
              .reduce((prev, current) => prev + current, 0)}
          </span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ color: 'silver' }}
        >
          <span>Coupouns</span>
          <span>---</span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ color: 'silver' }}
        >
          <span>Delivery</span>
          <span style={{ color: '#ec436f' }}>FREE</span>
        </div>
        <hr />
        <div
          className="d-flex justify-content-between"
          style={{ color: 'rgba(20, 20, 20)' }}
        >
          <span>
            <strong>Total:</strong>
          </span>
          <span>
            <strong>
              &#x20b9;
              {cart
                .map((item) => item.product.price)
                .reduce((prev, current) => prev + current, 0)}
            </strong>
          </span>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-danger btn mt-3 btn-block">
              <strong>place order</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
