import React from 'react';

const Invoice = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <strong>Price details:</strong>
        <hr />
        <div className="d-flex justify-content-between">
          <span>Bag total</span>
          <span>&#x20b9;1000</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Bag total</span>
          <span>&#x20b9;1000</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Bag total</span>
          <span>&#x20b9;1000</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Bag total</span>
          <span>&#x20b9;1000</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Bag total</span>
          <span>&#x20b9;1000</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>
            <strong>Bag total:</strong>
          </span>
          <span>
            <strong>&#x20b9;1000</strong>
          </span>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="button" class="btn btn-danger btn mt-3 btn-block">
              <strong>place order</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
