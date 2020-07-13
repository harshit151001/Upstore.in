import React, { useEffect, useState } from 'react';
import axios from 'axios';
//!import Categorycard from '../Cards/Categorycard';
import { Link } from 'react-router-dom';
const Categorylist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://159.65.159.82:8000/api/categories/').then((response) => {
      setData(response.data.categories);
    });
  }, []);
  return (
    <div>
      {data.map(({ name, path, _ID }) => {
        return (
          <Link to={`/category/${_ID}`} key={_ID}>
            <h1>{name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Categorylist;
