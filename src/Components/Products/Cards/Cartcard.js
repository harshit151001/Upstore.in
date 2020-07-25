import React from 'react';
import Remove from '../../Buttons/Remove';
// import Addtowishlist from '../../Buttons/Remove';
import API from '../../../backend';
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
  } = product;

  return (
    <div
      className="card mt-3"
      shopId={shopId}
      city={city}
      size={size}
      category={category}
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
                <strong className="d-none d-sm-block">
                  &#x20b9;{(price * discount) / 100}
                </strong>
              </span>
            </div>
            <div className="d-flex w-100 mt-0 justify-content-between">
              <span className="d-flex ">
                <span>
                  <button>
                    <i className="fa fa-plus"></i>
                  </button>
                </span>
                <span>
                  <input
                    type="text"
                    style={{ width: '30px' }}
                    value={quantity}
                    className=""
                    // onChange={}
                  />
                </span>
                <span>
                  <button>
                    <i className="fa fa-minus"></i>
                  </button>
                </span>
              </span>
              <span>
                <p className="text-muted d-none d-sm-block">
                  <span>
                    <s>&#x20b9;{price}</s>{' '}
                  </span>
                  <span className="small" style={{ color: 'red' }}>
                    {' '}
                    {discount}
                  </span>
                </p>
              </span>
            </div>
            <div className="d-flex mt-2">
              <span>
                <strong className="d-block d-sm-none">
                  &#x20b9;{(price * discount) / 100}
                </strong>
              </span>
              <p className="text-muted d-block d-sm-none ml-1">
                <span>
                  <s>&#x20b9;{price}</s>{' '}
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
            {/* <Addtowishlist id={_id}>Move to wishlist</Addtowishlist> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
