import React from 'react';
import Productcard from '../Cards/Carddesktop';


const Productlist = ({data, categoryId}) => {

  return <>
    {
      data.map((product)=>{
        return<Productcard product={product} categoryId={categoryId} key={product._id}/>
      })
    }</>;
};

export default Productlist;


