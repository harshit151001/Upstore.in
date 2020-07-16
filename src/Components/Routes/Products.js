import React from 'react';
import Productlist from '../Products/List/Productlist';

const Products = (props) => {
  const { categoryId } = props.match.params;
  return (
    <div>
      <Productlist categoryId={categoryId} />{' '}
    </div>
  );
};

export default Products;
