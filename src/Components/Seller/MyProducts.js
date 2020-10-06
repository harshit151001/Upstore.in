import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import useWindowDimensions from '../../customapis/useWindowDimensions';
import API from '../../backend';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';
import { isAutheticated } from '../../auth/helper/index';
import { ourReducer, initialState } from './Upload';
import { useImmerReducer } from 'use-immer';
import { dispatchContext } from '../../Statemanagement/Statecontext';

const RequiredErr = styled.div`
  color: red;
`;

const SaveBtn = styled.button`
  width: 100%;
  border: navajowhite;
  padding: 5px;
  margin: 2vh 0;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
  background-color: #ec436f;
  border-radius: 5px;
`;

const EditBtn = styled.button`
  height: 30px;
  background-color: #ec436f;
  color: white;
  font-weight: 600;
  border: none;
`;

const ProdName = styled.div`
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 990px) {
    font-size: 14px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  @media (max-width: 990px) {
    font-size: 14px;
  }
`;

const ImgWrapper = styled.div`
  width: 130px;
  height: 164px;

  display: flex;
  margin: 2vh;

  @media (max-width: 990px) {
    margin: 1vh 0 1vh 1vh;
  }
`;

const ProdImg = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  margin: auto;
`;

const FieldWrapper = styled.div`
  margin: 2vh 0;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function MyProducts({ shop }) {
  //   const { width } = useWindowDimensions();
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState('');
  const { token, user } = isAutheticated();
  const [show, setShow] = useState(false);
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  const [check, setCheck] = useState(0);
  const mainDispatch = useContext(dispatchContext);
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    let mounted = true;
    mainDispatch({ type: 'LOADING' });
    const loadandsetdata = async () => {
      const productsResponse = await Axios.get(`${API}/api/shop/products/${shop.shopId}?page=${currentPage}`);
      setTotalPages(Math.ceil(productsResponse.data.totalCount / 30));
      if (mounted) {
        setData(productsResponse.data.products);
      }
    };
    loadandsetdata();
    mainDispatch({ type: 'LOADED' });
    return () => {
      mounted = false;
    };
  }, [shop, currentPage, totalPages, check, mainDispatch]);

  const editHandler = index => {
    dispatch({ type: 'markedPrice', value: data[index].markedPrice.toString() });
    dispatch({ type: 'name', value: data[index].name });
    dispatch({ type: 'description', value: data[index].description });

    dispatch({ type: 'stock', value: data[index].stock.toString() });
    dispatch({ type: 'price', value: data[index].price.toString() });
    setEditIndex(index);
    setShow(true);
  };

  const updateProduct = async () => {
    const { images, name, description, markedPrice, stock, price } = state;
    const checkErr = [];
    for (const key in state) {
      if (state[key].hasErrors && key !== 'images') {
        checkErr.push(1);
      }
    }

    if (!checkErr.length) {
      const fd = new FormData();
      if (images.value.length) {
        for (let i = 0; i < images.value.length; i++) {
          fd.append(`images`, images.value[i]);
        }
      }

      fd.append(`name`, name.value);
      fd.append(`description`, description.value);
      fd.append(`markedPrice`, markedPrice.value);
      fd.append(`stock`, stock.value);
      fd.append(`price`, price.value);

      setShow(false);
      await Axios.put(`${API}/api/product/update/${data[editIndex]._id}/${user._id}`, fd, config);

      if (images.value.length) {
        setCheck(check => check + 1);
      } else {
        mainDispatch({ type: 'LOADING' });
        setData(data => {
          const newData = [...data];
          const newObject = { ...newData[editIndex] };
          newObject.name = name.value;
          newObject.description = description.value;
          newObject.markedPrice = markedPrice.value;
          newObject.atock = stock.value;
          newObject.price = price.value;

          newData[editIndex] = newObject;
          return newData;
        });
        mainDispatch({ type: 'LOADED' });
      }
    }
  };

  return (
    <Wrapper>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">EDIT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form noValidate autoComplete="off">
            <FieldWrapper>
              <TextField fullWidth={true} id="name" value={state.name.value} onChange={e => dispatch({ type: 'name', value: e.target.value })} label="name" variant="filled" color="secondary" />
              {state.name.hasErrors && <RequiredErr>{state.name.message} </RequiredErr>}
            </FieldWrapper>

            <FieldWrapper>
              <TextField fullWidth={true} id="stock" value={state.stock.value} onChange={e => dispatch({ type: 'stock', value: e.target.value })} label="Stock" type="number" variant="filled" />
              {state.stock.hasErrors && <RequiredErr>{state.stock.message} </RequiredErr>}
            </FieldWrapper>
            <FieldWrapper>
              <TextField fullWidth={true} id="price" value={state.price.value} onChange={e => dispatch({ type: 'price', value: e.target.value })} label="Price" type="number" variant="filled" />
              {state.price.hasErrors && <RequiredErr>{state.price.message} </RequiredErr>}
            </FieldWrapper>
            <FieldWrapper>
              <TextField fullWidth={true} id="markedPrice" value={state.markedPrice.value} onChange={e => dispatch({ type: 'markedPrice', value: e.target.value })} label="Marked Price" type="number" variant="filled" />
              {state.markedPrice.hasErrors && <RequiredErr>{state.markedPrice.message} </RequiredErr>}
            </FieldWrapper>
            <FieldWrapper>
              <textarea style={{ width: '100%' }} placeholder="Description" id="description" value={state.description.value} onChange={e => dispatch({ type: 'description', value: e.target.value })}></textarea>
            </FieldWrapper>
            <FieldWrapper>
              <input accept="file_extension | image/png | image/jpg | image/jpeg" id="file" onChange={e => dispatch({ type: 'images', value: e.target.files })} type="file" multiple />
            </FieldWrapper>
          </form>
          <SaveBtn onClick={() => updateProduct()}>SAVE</SaveBtn>
        </Modal.Body>
      </Modal>

      {data.map(({ name, price, stock, markedPrice, photos }, index) => {
        const src = photos[0].substr(6);
        return (
          <ProductCard key={index}>
            <ImgWrapper>
              <ProdImg src={`${API}${src}`} alt="" />
            </ImgWrapper>
            <div style={{ width: '100%', margin: '2vh 1vh' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ProdName>{name}</ProdName>

                <EditBtn onClick={() => editHandler(index)}>EDIT</EditBtn>
              </div>
              <div>
                <span style={{ color: '#ec436f' }}> Rs:{price}</span> <strike className="text-muted">Rs:{markedPrice}</strike> <span style={{ color: 'rgb(255, 144, 90)' }}>({Math.ceil(((markedPrice - price) * 100) / markedPrice)}%) OFF</span>
              </div>
              <div style={stock ? { color: 'lightseagreen' } : { color: 'red' }}>Stock:{stock}</div>
            </div>
          </ProductCard>
        );
      })}
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
            {currentPage > 1 ? <Link to={`/seller/my-products?page=${currentPage - 1 || 1}`}> back</Link> : 'back'}
          </button>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className="btn btn-light ml-2"
          >
            {currentPage < totalPages ? <Link to={`/seller/my-products?page=${totalPages > currentPage ? currentPage + 1 : totalPages}`}> next</Link> : 'next'}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
