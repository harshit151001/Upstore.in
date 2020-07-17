import React from 'react';
import API from '../../../backend';
//import { Link } from 'react-router-dom';
//!import Addtocart from '../../Buttons/Addtocart';

const Carddesktop = ({ price, path, id }) => {
  console.log(price, path, id);
  return (
    <div>
      <div>
        <img src={`${API}/api/${path.substr(6)}`} alt="" />
      </div>
    </div>
  );
};

export default Carddesktop;
