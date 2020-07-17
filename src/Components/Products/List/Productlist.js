import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from '../Cards/Carddesktop';

import styled from 'styled-components';
import API from '../../../backend';

const Productbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Productlist = ({ categoryId, cityId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1`).then(response => {
      setData(response.data.products);
    });
  }, [categoryId, data]);

  return (
    <Productbox>
      <div>
        {data.map(({ price, images, _id }) => {
          return (
            <div key={_id}>
             
                <Productcard price={price} path={images[0]} id={_id} />
             
            </div>
          );
        })}
      </div>
    </Productbox>
  );
};

export default Productlist;

