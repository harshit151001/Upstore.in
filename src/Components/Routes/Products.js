import React, { useEffect, useState } from 'react';
import Productlist from '../Products/List/Productlist';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';
import Filters from '../Filters/Filters';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import axios from 'axios';
import API from '../../backend';
const queryString = require('query-string');

const Products = props => {
  const { categoryId } = props.match.params;
  const { width } = useWindowDimensions();

  const parsed = queryString.parse(window.location.search);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(parseInt(parsed.page) || 1);

  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      if (parsed.search) {
        const response = await axios.get(`${API}/api/search/products/5eff8e76d75ecb3735b243b1?search=${parsed.search}&&page=${currentPage}`);
        if (mounted) {
          window.scroll(0, 0);

          setTotalPages(Math.ceil(response.data.totalCount / 2));

          setData(response.data.products);
          console.log(response.data.products);
        }
      } else {
        const response = await axios.get(`${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage || 1}`);
        if (mounted) {
          window.scroll(0, 0);

          setTotalPages(Math.ceil(response.data.totalCount / 10));

          setData(response.data.products);
          console.log(response.data.products);
        }
      }
    };
    loadandsetdata();
    return () => {
      mounted = false;
    };
  }, [categoryId, currentPage, totalPages, parsed.search]);
  return (
    <>
      <WelcomeBanner />
      <Row>
        {width > 760 && (
          <Col xs={0} md={2} lg={2}>
            <Filters />
          </Col>
        )}

        <Col xs={12} md={10} lg={10} style={{ marginTop: '2vw' }}>
          <Productlist categoryId={categoryId} data={data} />
        </Col>
      </Row>

      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        {currentPage > 1 ? <Link to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage - 1 || 1}${parsed.search ? `&&search=` + parsed.search : ''}`}> back</Link> : 'back'}
      </button>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        {currentPage < totalPages ? <Link to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${totalPages > currentPage ? currentPage + 1 : totalPages}${parsed.search ? `&&search=` + parsed.search : ''}`}> next</Link> : 'next'}
      </button>
    </>
  );
};

export default Products;
