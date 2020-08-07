import React, { useEffect, useState } from 'react';
import Productlist from '../Products/List/Productlist';
import { Link } from 'react-router-dom';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';
import Filters from '../Filters/Filters';
import Axios from 'axios';
import API from '../../backend';
const queryString = require('query-string');
//todo: optimize perfomance
const Products = (props) => {
  const { categoryId } = props.match.params;
  const { search, page } = queryString.parse(window.location.search);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);

  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      if (search) {
        const response = await Axios.get(
          `${API}/api/search/products/5eff8e76d75ecb3735b243b1?search=${search}&&page=${currentPage}`
        );
        if (mounted) {
          window.scroll(0, 0);
          setTotalPages(Math.ceil(response.data.totalCount / 2));
          setData(response.data.products);
        }
      } else {
        const response = await Axios.get(
          `${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${
            currentPage || 1
          }`
        );
        if (mounted) {
          window.scroll(0, 0);

          setTotalPages(Math.ceil(response.data.totalCount / 10));

          setData(response.data.products);
        }
      }
    };
    loadandsetdata();
    return () => {
      mounted = false;
    };
  }, [categoryId, currentPage, search, totalPages]);
  return (
    <>
      <WelcomeBanner />
      <div className="container-fluid">
        <div className="row mt-3 w-100 no-gutters">
          <div className="col-2 d-none d-lg-block w-100 no-gutters">
            <Filters />
          </div>
          <div className=" col-12 col-lg-10 w-100 no-gutters">
            <div className="row align-content-around no-gutters">
              <Productlist categoryId={categoryId} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5 pb-5">
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            className="btn btn-light mr-2"
          >
            {currentPage > 1 ? (
              <Link
                to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${
                  currentPage - 1 || 1
                }${search ? `&&search=` + search : ''}`}
              >
                {' '}
                back
              </Link>
            ) : (
              'back'
            )}
          </button>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className="btn btn-light ml-2"
          >
            {currentPage < totalPages ? (
              <Link
                to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${
                  totalPages > currentPage ? currentPage + 1 : totalPages
                }${search ? `&&search=` + search : ''}`}
              >
                {' '}
                next
              </Link>
            ) : (
              'next'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
