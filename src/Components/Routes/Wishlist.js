import React, { useContext } from 'react';
import Productlist from '../Products/List/Productlist';
import { appContext } from '../../Statemanagement/Statecontext';

const Wishlist = props => {
  const { state } = useContext(appContext);
  const { wishlist } = state;

  return (
    <>
      <div className="container-fluid " style={{ background: '#fafafa', minHeight: '100vh' }}>
        <div className="row w-100 no-gutters justify-content-center">
          <div className=" col-12 col-lg-10 w-100 no-gutters">
            <div className="row align-content-around no-gutters">
              {wishlist.length ? (
                <Productlist data={wishlist} />
              ) : (
                <div className="card col-12 p-3 mt-3">
                  <strong>My wishlist</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5"></div>
      </div>
    </>
  );
};

export default Wishlist;
