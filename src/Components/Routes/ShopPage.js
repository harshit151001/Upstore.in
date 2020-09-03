import React from 'react';
import Shop from '../Shops/Shop';

export default function ShopPage(props) {
  const { shopId } = props.match.params;
  return (
    <div>
      <Shop shopId={shopId} />
    </div>
  );
}
