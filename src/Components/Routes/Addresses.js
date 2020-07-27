import React from 'react';
import Addresslist from '../Address/Addresslist';
import Addressform from '../Address/Addressform';
import Invoice from '../Cart/Invoice';

const Addresses = () => {
  return (
    <div className="container-xl">
      <div className="row mt-4 mb-1">
        <div className="col-12">
          <div className="card d-none d-sm-block">
            <div className="card-body">
              <div className="row w-100 py-auto my-auto">
                <div className="col-8 my-auto">
                  <h4 className="my-auto">Select or add new adress</h4>
                </div>
                <div className="col-4 my-auto">
                  <button className="btn btn-outline-danger float-right">
                    Add new address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <Addresslist />
        </div>
        <div className="col-lg-3">
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default Addresses;
