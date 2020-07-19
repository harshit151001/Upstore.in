import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Productcard from '../Cards/Carddesktop';

import API from '../../../backend';
import { Row, Col } from 'react-bootstrap';

const queryString = require('query-string');

const Productlist = ({ categoryId, cityId }) => {
  const parsed = queryString.parse(window.location.search);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(parseInt(parsed.page) || 1);

  useEffect(() => {
    axios
      .get(`${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage || 1}`)
      .then(response => {
        console.log(response);

        window.scroll(0, 0);
        if (totalPages === 1) {
          setTotalPages(Math.ceil(response.data.totalCount / 10));
        }
        return setData(response.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, [categoryId, currentPage]);

  console.log(totalPages);
  return (
    <>
      <Row style={{ margin: 'auto' }}>
        {data
          ? data.map(({ price, images, _id }) => {
              return (
                <Col xs={6} md={4} lg={3} key={_id} style={{ padding: 0 }}>
                  <Productcard key={_id} price={price} path={images[0]} id={_id} />
                </Col>
              );
            })
          : null}
      </Row>

      <Link to={`/products/5f0b5855a8495d29230e5a26/5eff8e76d75ecb3735b243b1?page=${currentPage - 1 || 1}`}>
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          back
        </button>
      </Link>

      <Link to={`/products/5f0b5855a8495d29230e5a26/5eff8e76d75ecb3735b243b1?page=${totalPages > currentPage ? currentPage + 1 : totalPages}`}>
        <button
          onClick={() => {
            if (currentPage < 2) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          next
        </button>
      </Link>
    </>
  );
};

export default Productlist;
