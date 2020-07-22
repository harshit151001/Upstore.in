import React from 'react';
import i2 from '../../Images/i2.jpg';
const Cartcard = () => {
  return (
    <div class="card mt-3">
      <div class="card-body">
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
              src={i2}
              class="card-img"
              alt="..."
            />
          </div>
          <div className="w-100" style={{ paddingLeft: '10px' }}>
            <h5>Product name</h5>
            <div className="d-flex w-100 justify-content-between">
              <span>
                <p className="small text-muted ">
                  Sold by: prozone, nike aurngabad
                </p>
              </span>
              <span>
                <strong className="d-none d-sm-block">&#x20b9;333.00</strong>
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
                    value="1"
                    className=""
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
                    <s>&#x20b9;1000</s>{' '}
                  </span>
                  <span className="small" style={{ color: 'red' }}>
                    {' '}
                    60% off
                  </span>
                </p>
              </span>
            </div>
            <div className="d-flex mt-2">
              <span>
                <strong className="d-block d-sm-none">&#x20b9;333.00</strong>
              </span>
              <p className="text-muted d-block d-sm-none ml-1">
                <span>
                  <s>&#x20b9;1000</s>{' '}
                </span>
                <span className="small" style={{ color: 'red' }}>
                  {' '}
                  60% off
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              class="btn btn-danger btn-light text-muted btn-block "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
