import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categorycard from '../Cards/Categorycard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../../backend';

const Categorybox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 7%;
  padding-left: 7%;
  background: #f5f5f6;
  div:nth-child(1) {
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    color: rgba(20, 20, 20);
  }
  div:nth-child(2) {
    display: grid;
  }
`;

const Categorylist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/categories/`).then((response) => {
      setData(response.data.categories);
    });
  }, []);

  return (
    <Categorybox>
      <div>
        <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>
          Select what you want to shop for...
        </h1>
        <span
          style={{
            height: '6px',
            width: '12%',
            background: '#ec436f',
            borderRadius: '3px',
          }}
        ></span>
      </div>
      <div>
        {data.map(({ name, imagePath, _id }) => {
          return (
            <div key={_id}>
              <Link to={`/product/${_id}`}>
                <Categorycard name={name} path={imagePath} id={_id} />
              </Link>
            </div>
          );
        })}
      </div>
    </Categorybox>
  );
};

export default Categorylist;
