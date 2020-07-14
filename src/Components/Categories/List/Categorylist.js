import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categorycard from '../Cards/Categorycard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  justify-content: space-between;
`;

const Categorylist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://159.65.159.82:8000/api/categories/').then((response) => {
      setData(response.data.categories);
    });
  }, []);

  return (
    <div style={{ margin: '10px 3% 10px 3%', background: 'white' }}>
      <div>
        <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>
          What do you want...
        </h1>
      </div>
      <Div>
        {data.map(({ name, imagePath, _ID }) => {
          return (
            <Link to={`/category/${_ID}`}>
              <Categorycard name={name} path={imagePath} id={_ID} key={_ID} />
            </Link>
          );
        })}
      </Div>
    </div>
  );
};

export default Categorylist;
