import React, { useState } from 'react';
import Remove from '../../Buttons/Remove';
import Quant from '../../Buttons/Quantity';
import Addtowishlist from '../../Buttons/Addtowishlist';
import API from '../../../backend';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px px 5px px;
  outline: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  background: #f5f5f6;
  border-radius: 2px;
  &:hover {
    background: #e1e1e4;
  }
  &:focus {
    border-color: 2px solid #dadade;
  }
`;

const Cartcard = (props) => {
  const { product, quantity } = props;
  const [number, setNumber] = useState(quantity);

  const increment = () => {
    setNumber((prev) => prev + 1);
  };
  const decrement = () => {
    setNumber((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const {
    _id,
    name,
    shopName,
    price,
    stock,
    // category,
    // city,
    // shopId,
    discount,
    //size,
    photos,
    markedPrice,
  } = product;
  //console.log(product);
  return (
    <div
      className="card mt-3"
      // shopId={shopId}
      // city={city}
      // size={size}
      // category={category}
      style={{
        boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.24)',
        border: 'none',
      }}
      stock={stock}
    >
      <div className="card-body">
        <div
          className="row no-gutters"
          style={{ display: 'flex', flexWrap: 'nowrap' }}
        >
          <div>
            <img
              style={{
                width: '111px',
                height: '148px',
                objectFit: 'cover',
              }}
              src={`${API}${photos[0].substr(6)}`}
              className="card-img"
              alt={name}
            />
          </div>
          <div className="w-100" style={{ paddingLeft: '10px' }}>
            <strong>{name}</strong>
            <div className="d-flex w-100 justify-content-between">
              <span>
                <p className="small text-muted ">Sold by: {shopName}</p>
              </span>
              <span>
                <strong className="d-none d-sm-block">&#x20b9;{price}</strong>
              </span>
            </div>
            <div className="d-flex w-100 mt-0 justify-content-between">
              <span className="d-flex ">
                <span>
                  <Button onClick={increment}>+</Button>
                </span>
                <span>
                  <Quant quantity={number} id={_id} />
                </span>
                <span>
                  <Button onClick={decrement}>-</Button>
                </span>
              </span>
              <span>
                <p className="text-muted d-none d-sm-block">
                  <span>
                    <s>&#x20b9;{markedPrice}</s>{' '}
                  </span>
                  <span className="small" style={{ color: 'red' }}>
                    {' '}
                    {Math.round(((markedPrice - price) * 100) / markedPrice)} %
                  </span>
                </p>
              </span>
            </div>
            <div className="d-flex mt-2">
              <span>
                <strong className="d-block d-sm-none">&#x20b9;{price}</strong>
              </span>
              <p className="text-muted d-block d-sm-none ml-1">
                <span>
                  <s>&#x20b9;{markedPrice}</s>{' '}
                </span>
                <span className="small" style={{ color: 'red' }}>
                  {' '}
                  {discount}
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <Remove id={_id}>Remove</Remove>
            <Addtowishlist
              classes="btn btn-danger btn-light text-muted btn-block"
              id={_id}
            >
              Move to wishlist
            </Addtowishlist>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
