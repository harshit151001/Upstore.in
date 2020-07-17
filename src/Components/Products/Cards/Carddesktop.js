import React from 'react';
import Addtocart from '../../Buttons/Addtocart';
import { Link } from 'react-router-dom';
const Carddesktop = ({ name, price, path, id }) => {
  const src = path.substr(6);
  return (
    <div key={id}>
      <div style={{ width: '250px', height: '320px', background: ' green' }}>
        <Link to={`/product/${id}`}>
          <img src={`http://159.65.159.82:8000${src}`} alt="placeholder" />
        </Link>
      </div>
      <div style={{ width: '250px', height: 'auto' }}>
        <h4>product name</h4>
        <p>
          shop details <span>description</span>
        </p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <h4>{price}</h4>
            <p>RS. mrp dicount. 10%</p>
          </div>
          <div>
            <Addtocart src={src} name={name} price={price} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carddesktop;
