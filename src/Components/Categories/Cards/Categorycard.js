//!library
import React from 'react';
//!host adress
import API from '../../../backend';

const Categorycard = ({ name, path }) => {
  const src = path.substr(6);
  return (
    <div
      className="card hoveroncategory"
      style={{
        margin: '2vw',
        minHeight: '130px',
        boxShadow: '0px 0px 4px 1px rgba(97,97,97,0.3)',
      }}
    >
      <div className="row">
        <div className="col">
          <div
            className="row"
            style={{ margin: 'auto', justifyContent: 'center' }}
          >
            <img
              style={{
                width: '50px',
                height: '50px',
                margin: '1vw',
                minHeight: '60px',
                minWidth: '60px',
              }}
              src={`${API}/${src}`}
              alt={name}
            />
          </div>
          <div
            className="row"
            style={{ margin: 'auto', justifyContent: 'center' }}
          >
            <strong style={{ textAlign: 'center', color: 'grey' }}>
              {name}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
