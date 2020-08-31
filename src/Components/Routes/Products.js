//?libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import queryString from 'query-string';

//?Hooks
import useWindowDimensions from '../../customapis/useWindowDimensions';

//?URL
import API from '../../backend';
//?components
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';
import Productlist from '../Products/List/Productlist';
import Filters from '../Filters/Filters';
import UpLoader from '../Loader/UpLoader';
import Stitch from '../Images/Stitch.png';
import UpDoggy from '../Images/UpDoggy.png';
import { ContentWrapper, Wrapper, ErrTitle } from '../../Error.js';

const Products = props => {
  const { width } = useWindowDimensions();

  //?using params from URL
  const { categoryId } = props.match.params;
  const { search, page } = queryString.parse(window.location.search);
  //?declaring states
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  //?loading and setting data
  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      if (search) {
        const response = await Axios.get(`${API}/api/search/products/5eff8e76d75ecb3735b243b1?search=${search}&&page=${currentPage}`);
        if (mounted) {
          window.scroll(0, 0);
          setTotalPages(Math.ceil(response.data.totalCount / 10));
          setData(response.data.products);
        }
      } else {
        const response = await Axios.get(`${API}/api/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage || 1}`);
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
  console.log(data);
  return (
    <>
      {data ? (
        data.length ? (
          <>
            {' '}
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
                  {currentPage > 1 ? <Link to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage - 1 || 1}${search ? `&&search=` + search : ''}`}> back</Link> : 'back'}
                </button>

                <button
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                  className="btn btn-light ml-2"
                >
                  {currentPage < totalPages ? <Link to={`/products/${categoryId}/5eff8e76d75ecb3735b243b1?page=${totalPages > currentPage ? currentPage + 1 : totalPages}${search ? `&&search=` + search : ''}`}> next</Link> : 'next'}
                </button>
              </div>
            </div>{' '}
          </>
        ) : search ? (
          <Wrapper>
            <ContentWrapper>
              <div>
                <ErrTitle style={{ marginTop: '0' }}>Uh oh.</ErrTitle>
                <div style={{ fontSize: '2.5vh', color: 'grey' }}>No results found for "{search}"</div>
                <div style={{ marginBottom: '20px', padding: '0 10px' }}>Try checking your spelling or use more general terms</div>
              </div>
              <img style={width < 780 ? { width: '273px' } : { width: '400px' }} src={UpDoggy} alt="" />
            </ContentWrapper>
          </Wrapper>
        ) : (
          <Wrapper style={{ marginTop: '150px' }}>
            <ContentWrapper>
              <img style={width < 780 ? { width: '88vw' } : { width: '550px' }} src={Stitch} alt="" />
              <div>
                <ErrTitle>Shhhh! </ErrTitle>
                <div style={{ fontSize: '2.5vh' }}>This category is coming soon.... </div>
              </div>
            </ContentWrapper>
          </Wrapper>
        )
      ) : (
        <div style={{ marginTop: '10vh' }}>
          <UpLoader />
        </div>
      )}
    </>
  );
};

export default Products;
