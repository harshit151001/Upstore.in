import React from 'react';
import Remove from '../../Buttons/Remove';
import Addtowishlist from '../../Buttons/Addtowishlist';
import API from '../../../backend';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
const Cartcard = (props) => {
  const { product, quantity } = props;

  const {
    _id,
    name,
    shopName,
    price,
    stock,
    category,
    city,
    shopId,
    discount,
    size,
    photos,
    markedPrice,
  } = product;
  console.log(product);
  return (
    <div
      className="card mt-3"
      shopId={shopId}
      city={city}
      size={size}
      category={category}
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
            <h5>{name}</h5>
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
                  <button className="btn btn-light">
                    <AddRoundedIcon />
                  </button>
                </span>
                <span>
                  <input
                    type="text"
                    style={{ width: '30px' }}
                    value={quantity}
                    className="btn"
                    // onChange={}
                  />
                </span>
                <span>
                  <button className="btn btn-light">
                    <RemoveRoundedIcon />
                  </button>
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
