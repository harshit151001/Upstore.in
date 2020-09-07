import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import API from '../../backend';
import Axios from 'axios';
import ProductList from '../Products/List/Productlist';
import UpPlaceholder from '../Images/UpPlaceholder.png';

const Title = styled.div`
  text-transform: capitalize;
  font-weight: 800;
  font-size: 3vh;
  color: white;
  margin-left: 2vh;
  @media (max-width: 600px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    margin: 0.5vh 1.5vh;
    font-size: 19px;
  }
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
  @media (min-width: 990px) {
    padding: 4vh 9vh;
  }
  @media (max-width: 990px) {
    padding: 4vh 3vh;
    justify-content: left;
    text-align: center;
    margin: auto;
  }
  width: 100%;
  flex-wrap: wrap;
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

const ListWrapper = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 4vh;
`;

export default function Shop({ shopId }) {
  const [shopData, setShopData] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log('c');
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
  }, [currentPage, shopId]);

  const { name, _id, banner } = shopData;
  return (
    <Wrapper>
      <Jumbotron>
        <Container>
          <ImageContainer>
            <ShopImage src={banner ? API + banner.substr(6) : UpPlaceholder} />
          </ImageContainer>
          <Title>{name}</Title>
        </Container>
      </Jumbotron>
      <ListWrapper>{data.length && <ProductList data={data} />}</ListWrapper>
      <ButtonWrapper>
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
      </ButtonWrapper>
    </Wrapper>
  );
}
