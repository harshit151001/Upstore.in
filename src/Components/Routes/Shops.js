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
import Stitch from '../Images/Stitch.png';
import UpLoader from '../Loader/UpLoader';

import { ContentWrapper, Wrapper, ErrTitle } from '../../Error.js';
import ShopList from '../Shops/List/ShopList';

const Shops = props => {
  const { width } = useWindowDimensions();

  //?using params from URL
  const { categoryId } = props.match.params;
  const { page } = queryString.parse(window.location.search);
  //?declaring states
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  //?loading and setting data
  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      console.log(`${API}/api/shops/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage || 1}`);
      const response = await Axios.get(`${API}/api/shops/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage || 1}`);
      console.log(response);
      if (mounted) {
        window.scroll(0, 0);
        setTotalPages(Math.ceil(response.data.totalCount / 10));
        setData(response.data.shops);
      }
    };
    loadandsetdata();

    return () => {
      mounted = false;
    };
  }, [categoryId, currentPage, totalPages]);
  console.log(data);
  return (
    <>
      {data ? (
        data.length ? (
          <>
            {' '}
            <WelcomeBanner />
            <div style={{ display: 'flex' }}>
              <ShopList categoryId={categoryId} data={data} />
            </div>
            {data.length > 10 && (
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
                    {currentPage > 1 ? <Link to={`/shops/${categoryId}/5eff8e76d75ecb3735b243b1?page=${currentPage - 1 || 1}`}> back</Link> : 'back'}
                  </button>

                  <button
                    onClick={() => {
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                      }
                    }}
                    className="btn btn-light ml-2"
                  >
                    {currentPage < totalPages ? <Link to={`/shops/${categoryId}/5eff8e76d75ecb3735b243b1?page=${totalPages > currentPage ? currentPage + 1 : totalPages}`}> next</Link> : 'next'}
                  </button>
                </div>
              </div>
            )}{' '}
          </>
        ) : (
          <Wrapper style={{ marginTop: '150px' }}>
            <ContentWrapper>
              <img style={width < 780 ? { width: '88vw' } : { width: '550px' }} src={Stitch} alt="" />
              <div>
                <ErrTitle>Shhhh! </ErrTitle>
                <div style={{ fontSize: '2.5vh' }}>Shops coming soon.... </div>
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

export default Shops;
