import React, { useEffect, useState, useContext } from 'react';
import Productlist from '../Products/List/Productlist';
import { appContext } from '../../Statemanagement/Statecontext'

const Wishlist = (props) => {
    const { state } = useContext(appContext);
    const { wishlist } = state;
    console.log(wishlist)
  
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-3 w-100 no-gutters justify-content-center">
          
          <div className=" col-12 col-lg-10 w-100 no-gutters">
            <div className="row align-content-around no-gutters">
             { wishlist.length?<Productlist data={wishlist} />:<div className="col-8 my-auto">
                  <strong>My shopping bag </strong>
                </div> }
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5">
        </div>
      </div>
    </>
  );
};

export default Wishlist;
