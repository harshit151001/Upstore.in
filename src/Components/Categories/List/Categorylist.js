import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categorycard from '../Cards/Categorycard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../../backend';

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
    axios.get(`${API}/api/categories/`).then((response) => {
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
      {data.map(({ name, imagePath, _id }) => {
        return (
          <Div key={_id}>
            <Link to={`/product/${_id}`}>
              <Categorycard name={name} path={imagePath} id={_id} />
            </Link>
          </Div>
        );
      })}
    </div>
  );
};

export default Categorylist;
