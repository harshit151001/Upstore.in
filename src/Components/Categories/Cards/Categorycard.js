import React from 'react';

const Categorycard = ({ name, path, id }) => {
  const src = path.substr(6);
  return (
    <div
      className="card bg-dark text-danger"
      style={{ width: '150px', height: '150px' }}
      key={id}
    >
      <img
        src={`http://159.65.159.82:8000${src}`}
        style={{ background: 'aliceblue' }}
        className="card-img"
        alt="{name}"
      />
      <div className="card-img-overlay">
        <h4 style={{ display: 'none' }} className="card-title">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default Categorycard;
