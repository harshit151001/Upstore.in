import React from 'react';
import Productlist from '../Products/List/Productlist';
import { withRouter } from 'react-router-dom';

const Products = props => {
  const { categoryId } = props.match.params;
  return (
    <div>
      <Productlist categoryId={categoryId} />{' '}
    </div>
  );
};

export default Products;
