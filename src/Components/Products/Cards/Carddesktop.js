import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Img from './Images';
import Addtocart from '../../Buttons/Addtocart';
import Addtowishlist from '../../Buttons/Addtowishlist';
import API from '../../../backend';
//eslint-disable-next-line
const Productcard = props => {
  const { product, categoryId } = props;
  const { name, photos, markedPrice, price, _id, shopName } = product;
  console.log(props);
  const src = photos[0].substr(6);

  return (
    <div style={{ width: '100%' }} className="card p-2 col-12 shadow-sm col-sm-6" key={_id}>
      <div className="row no-gutters" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Link style={{ textDecoration: 'none' }} to={`/productpage/${_id}`}>
          <div>
            <Img src={`${API}${src}`} alt={name} />
          </div>
        </Link>
        <div style={{ paddingLeft: '10px' }} className="w-100">
          <p className="mb-1">
            <strong>{name}</strong>
          </p>
          <p className="small  mt-0 pt-0">
            Rs.{price} {'    '}
            {Math.ceil(((markedPrice - price) / markedPrice) * 100) > 2 ? (
              <>
                <strike className="text-muted">Rs.{markedPrice}</strike> <span style={{ color: '#ff905a' }}> ({Math.ceil(((markedPrice - price) / markedPrice) * 100) + '% Off'})</span>
              </>
            ) : (
              ''
            )}
          </p>
          {props.match.path !== '/shop/:shopId' && <p className="small text-muted mt-0 pt-0">Sold by: {shopName} </p>}
          <Addtowishlist classes="btn btn-outline-primary" id={_id}>
            WISHLIST
          </Addtowishlist>

          <Addtocart classes="m-2 btn btn-primary" id={_id}>
            ADD TO CART
          </Addtocart>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Productcard);
