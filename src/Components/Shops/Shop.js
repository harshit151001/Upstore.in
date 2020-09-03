import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginImage from '../Images/Login.png';
import API from '../../backend';
import Axios from 'axios';
import ProductList from '../Products/List/Productlist';

const Title = styled.div`
  text-transform: capitalize;
  font-weight: 800;
  font-size: 3vh;
  color: white;
`;

const ShopImage = styled.img`
  object-fit: cover;
  border-radius: 20px;

  height: 22vh;

  width: 180px;
  margin: auto;
  width: 180px;
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
`;

const Container = styled.div`
  display: flex;
  padding: 4vh 9vh;
  width: 100%;
`;
const Jumbotron = styled.div`
  height: 30vh;
  display: flex;
  background: linear-gradient(90deg, rgba(236, 67, 111, 1) 0%, rgba(99, 50, 96, 1) 100%);
  width: 100%;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;

  width: 100%;

  flex-wrap: wrap;
  margin: auto;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export default function Shop({ shopId }) {
  const [shopData, setShopData] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      console.log(`${API}/api/shop/${shopId}`);
      const shopResponse = await Axios.get(`${API}/api/shop/${shopId}`);
      const productsResponse = await Axios.get(`${API}/api/shop/products/${shopId}?page=${currentPage}`);
      setTotalPages(Math.ceil(productsResponse.data.totalCount / 10));
      console.log(shopResponse);
      if (mounted) {
        window.scroll(0, 0);
        setData(productsResponse.data.products);
        setShopData(shopResponse.data.Shop);
      }
    };
    loadandsetdata();

    return () => {
      mounted = false;
    };
  }, [currentPage]);

  console.log(currentPage, totalPages);
  const { name, _id } = shopData;
  return (
    <Wrapper>
      <Jumbotron>
        <Container>
          <ImageContainer>
            <ShopImage src={LoginImage} />
          </ImageContainer>
          <Title>{name}</Title>
        </Container>
        {/* <ShopImage src={'https://upstore.in/images/2020-08-03T09:01:32.500Z-assss-139991516.jpg'} /> */}
      </Jumbotron>
      {data.length && <ProductList data={data} />}
      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        }}
        className="btn btn-light mr-2"
      >
        {currentPage > 1 ? <Link to={`/shop/${_id}`}> back</Link> : 'back'}
      </button>

      <button
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
        className="btn btn-light ml-2"
      >
        {currentPage < totalPages ? <Link to={`/shop/${_id}`}>next</Link> : 'next'}
      </button>
    </Wrapper>
  );
}
