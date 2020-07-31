import React from 'react';
import Productcard from '../Cards/Carddesktop';


const Productlist = ({data, categoryId}) => {
console.log(data)
  return <>
    {
      data.map((product)=>{
       
        return<Productcard product={product.product?product.product:product} categoryId={categoryId} key={product._id}/>
      })
    }</>;
};

export default Productlist;


