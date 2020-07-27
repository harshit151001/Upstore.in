import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Productcard from '../Cards/Carddesktop';

import API from '../../../backend';
import { Row, Col } from 'react-bootstrap';

const queryString = require('query-string');

const Productlist = () => {
  const parsed = queryString.parse(window.location.search);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(parseInt(parsed.page) || 1);

  useEffect(() => {
    console.log(parsed);
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(`${API}/api/search/products/5eff8e76d75ecb3735b243b1?search=${parsed.search}&&page=${currentPage}`);
      console.log(response);
      if (mounted) {
        window.scroll(0, 0);
        if (totalPages === 1) {
          setTotalPages(Math.ceil(response.data.totalCount / 2));
        }
        setData(response.data.products);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, [currentPage]);

  console.log(totalPages);
  return (
    <>
      <Row style={{ margin: 'auto' }}>
        {data
          ? data.map(({ price, photos, _id }) => {
              return (
                <Col xs={6} md={4} lg={3} key={_id} style={{ padding: 0 }}>
                  <Productcard key={_id} price={price} path={photos[0]} id={_id} />
                </Col>
              );
            })
          : null}
      </Row>

      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        {currentPage > 1 ? <Link to={`/searchlist/products?search=${parsed.search}&&page=${currentPage - 1 || 1}`}>back</Link> : 'back'}
      </button>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        {currentPage < totalPages ? <Link to={`/searchlist/products?search=${parsed.search}&&page=${totalPages > currentPage ? currentPage + 1 : totalPages}`}>next</Link> : 'next'}
      </button>
    </>
  );
};

export default Productlist;
