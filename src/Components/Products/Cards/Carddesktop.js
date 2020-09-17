import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Img from './Images';
import Addtocart from '../../Buttons/Addtocart';
import Addtowishlist from '../../Buttons/Addtowishlist';
import API from '../../../backend';
import { buildQueries } from '@testing-library/react';
import styled from 'styled-components';
//eslint-disable-next-line

const ClosedDiv = styled.div`
  font-weight: 620;
  color: grey;
  background-color: #f5f5f6;
  width: fit-content;
  padding: 0 14px;
  border-radius: 20px;
  font-size: 13px;
`;

const Productcard = props => {
  const { product } = props;
  const { name, photos, markedPrice, price, _id, shopName, variants, open } = product;
  console.log(product);
  const src = photos[0].substr(6);

  const ShowVariant = variants => {
    if (variants.length) {
      let variant = variants.find(doc => doc.product === _id);

      return (
        <div style={{ fontSize: '80%', color: 'lightseagreen' }}>
          {variant.size ? `Size: ${variant.size}` : ''} {variant.color ? `Color: ${variant.color}` : ''}
        </div>
      );
    }
  };

  return (
    <div style={{ width: '100%' }} className="card p-2 col-12 shadow-sm col-sm-6" key={_id}>
      <div className="row no-gutters" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <Link style={{ textDecoration: 'none' }} to={`/productpage/${_id}`}>
          <div>
            <Img src={`${API}${src}`} alt={name} />
          </div>
        </Link>
        <div style={{ paddingLeft: '10px' }} className="w-100">
          <Link style={{ textDecoration: 'none' }} to={`/productpage/${_id}`}>
            <p style={{ color: '#212529' }} className="mb-1">
              <strong>{name}</strong>
            </p>
            <p style={{ marginBottom: '0.25rem' }} className="small  mt-0 pt-0">
              Rs.{price} {'    '}
              {Math.ceil(((markedPrice - price) / markedPrice) * 100) > 2 ? (
                <>
                  <strike className="text-muted">Rs.{markedPrice}</strike> <span style={{ color: '#ff905a' }}> ({Math.ceil(((markedPrice - price) / markedPrice) * 100) + '% Off'})</span>
                </>
              ) : (
                ''
              )}
            </p>
            <p style={{ marginBottom: '0.25rem' }}>{ShowVariant(variants)}</p>
            {variants.length ? (
              <Link style={{ textDecoration: 'none' }} to={`/productpage/${_id}`}>
                <div>View all variants</div>
              </Link>
            ) : (
              <div style={{ height: '2vh' }}></div>
            )}
            {props.match.path !== '/shop/:shopId' && <p className="small text-muted mt-0 pt-0">Sold by: {shopName} </p>}
          </Link>

          <Addtowishlist classes="btn btn-outline-primary" id={_id}>
            WISHLIST
          </Addtowishlist>

          {open ? (
            <Addtocart classes="m-2 btn btn-primary" id={_id}>
              ADD TO CART
            </Addtocart>
          ) : (
            <div>
              <ClosedDiv disabled>Shop Closed</ClosedDiv>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Productcard);
