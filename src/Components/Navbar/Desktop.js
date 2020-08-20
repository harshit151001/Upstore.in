import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { appContext } from '../../Statemanagement/Statecontext';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
//Icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import GpsFixedRoundedIcon from '@material-ui/icons/GpsFixedRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import IconButton from '@material-ui/core/IconButton';
import MySnackbar from '../Snackbar/Snackbar';
//logo
import logo from '../Images/UpLogoFinal.png';

//DESKTOP NAVBAR
/*********************************************************************/
const DesktopNav = styled.div`
  display: flex;
  width: 100vw;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  height: 9vh;
  max-height: 98px;
  min-height: 60px;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  margin: auto;
  box-shadow: 0px 0px 5px 3px rgba(97, 97, 97, 0.3);
  font-size: 25px;
  position: fixed;
  justify-content: center;
  top: 0;
  border-bottom: 1px solid aliceblue;
  z-index: 100;
  div {
    height: 9vh;
    max-height: 98px;
    width: 60%;
    display: flex !important;
    align-items: center;
    color: rgba(20, 20, 20);
    form {
      display: flex;
      height: 5vh;
      input {
        font-size: 22px;
        border: none;
        outline: none;
        background: #f5f5f6;
        width: 85%;
        &:focus {
          border: 1px solid #ec436f;
        }
      }
      button {
        outline: none;
        border: none;
        font-size: 22px;
        color: rgba(20, 20, 20);
        background: #f5f5f6;
        width: 15%;
        justify-content: center;
        transition: all 0.3s ease;
        &:nth-child(2):hover {
          background: #ec436f;
          color: #f5f5f6;
        }
      }
      &:nth-child(1) {
        width: 34%;
        input {
          border-radius: 8px 0 0 8px;
          background: #f5f5f6; /*remove after activating*/
        }
        button {
          opacity: 0.8; /*remove after activating*/
          cursor: pointer;
        }
      }
      &:nth-child(2) {
        width: 66%;
        button {
          border-radius: 0px 8px 8px 0px;
          cursor: pointer;
        }
      }
    }
    &:not(:nth-child(2)) {
      width: 15% !important;
      background: transparent;
      justify-content: space-around;
    }
  }
`;
/*********************************************************************/

//DESKTOP DROPDOWNS
/*********************************************************************/
const CategoriesDropdown = styled.div`
  position: fixed;
  margin-top: 6.3vh;
  top: -700px;
  left: 10%;
  width: 260px;
  z-index: 20;
  transition: all 0.2s ease-out;
`;
const AccountsDropdown = styled.div`
  position: fixed;
  margin-top: 6.3vh;
  top: -700px;
  left: 10%;
  width: 280px;
  z-index: 20;
  transition: all 0.2s ease-out;
`;
const CartDropdown = styled.div`
  position: fixed;
  margin-top: 6.3vh;
  top: -700px;
  left: 10%;
  width: 280px;
  z-index: 20;
  transition: all 0.2s ease-out;
`;

/*********************************************************************/

function Desktop(props) {
  const { state } = useContext(appContext);
  const { categorydata } = state;
  const [show, setShow] = useState(false);

  /****************************/
  const [x, SetX] = useState(0);
  const a = () => SetX(720);
  const b = () => SetX(0);
  /****************************/
  const [y, SetY] = useState(0);
  const c = () => SetY(720);
  const d = () => SetY(0);
  /****************************/
  const [z, SetZ] = useState(0);
  const e = () => SetZ(720);
  const f = () => SetZ(0);
  /****************************/

  const [enteredFilter, setEnteredFilter] = useState('');

  const inputRef = useRef();
  console.log(enteredFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current.value && enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0 ? '' : `?search=${enteredFilter}`;
        fetch(
          `${API}/api/search/products/5eff8e76d75ecb3735b243b1` + query
        ).then((response) => {
          response
            .json()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef]);

  const showSnackbar = () => {
    setShow(true);
    setTimeout(function () {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      <DesktopNav>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: '6vh',
                transform: 'translate(-8px,3px)',
                maxHeight: '44px',
              }}
            />
          </Link>
          <span
            style={{ height: '9vh', display: 'flex', alignItems: 'center' }}
            onMouseOver={a}
            onMouseLeave={b}
          >
            <AppsRoundedIcon />
          </span>
        </div>

        <div>
          <form action="">
            <input type="text" placeholder="Aurangabad" disabled="disabled" />
            <button
              disabled="disabled"
              style={{ display: 'flex', height: '5vh' }}
            >
              <GpsFixedRoundedIcon
                style={{ alignSelf: 'center', margin: 'auto' }}
              />
            </button>
          </form>
          <form action={`/products/search?page=1&&search=` + enteredFilter}>
            <input
              ref={inputRef}
              value={enteredFilter}
              placeholder="search for products..."
              onChange={(event) => setEnteredFilter(event.target.value)}
            />
            <button style={{ display: 'flex', height: '5vh' }}>
              <Link
                to={`/products/search?page=1&&search=` + enteredFilter}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '5vh',
                  padding: 'auto 20px auto 20px',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <SearchRoundedIcon
                  style={{
                    alignSelf: 'center',
                  }}
                />
              </Link>
            </button>
          </form>
        </div>
        <div>
          <IconButton
            onClick={showSnackbar}
            style={{ ouline: 'none', border: 'none', color: 'rgb(20,20,20)' }}
          >
            <Link
              to={!state.loggedIn ? '/loginsignup' : '/userdashboard'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span
                style={{ display: 'flex', alignItems: 'center' }}
                onMouseOver={c}
                onMouseLeave={d}
              >
                <AccountCircleOutlinedIcon />
              </span>
            </Link>
          </IconButton>
          <IconButton
            onClick={showSnackbar}
            style={{ ouline: 'none', border: 'none', color: 'rgb(20,20,20)' }}
          >
            <Link
              to={!state.loggedIn ? '/loginsignup' : '/wishlist'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#ec436f',
                }}
              >
                <FavoriteBorderRoundedIcon />
              </span>
            </Link>
          </IconButton>

          <IconButton
            onClick={showSnackbar}
            style={{ ouline: 'none', border: 'none', color: 'rgb(20,20,20)' }}
          >
            <Link
              to={
                !state.loggedIn
                  ? '/loginsignup'
                  : `/cart/${isAutheticated().user._id}`
              }
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span
                style={{ display: 'flex', alignItems: 'center' }}
                onMouseOver={e}
                onMouseLeave={f}
              >
                <ShoppingCartOutlinedIcon />
              </span>
            </Link>
          </IconButton>
        </div>
      </DesktopNav>

      {show && !state.loggedIn && (
        <MySnackbar
          vertical={'top'}
          horizontal={'center'}
          message={'You should be logged in to access'}
        />
      )}

      <CategoriesDropdown
        onMouseOver={a}
        onMouseLeave={b}
        style={{
          transform: `translateY(${x}px)`,
        }}
      >
        {categorydata.map(({ name, _id }) => {
          return (
            <Link
              className="deschhjb"
              key={_id}
              style={{
                textDecoration: 'none',
                fontFamily: 'poppins',
                fontSize: '14px',
                color: 'inherit',
              }}
              to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
            >
              <button
                type="button"
                className="btn btn-light d-block w-100 text-left deschhjb"
                style={{
                  borderRadius: '0',
                  fontSize: '16px',
                  height: '30px',
                  alignItems: 'center',
                  padding: '0px 0px 0px 8px',
                  border: 'none',
                  outline:'none'
                }}
                key={_id}
              >
                {name}
              </button>
            </Link>
          );
        })}
      </CategoriesDropdown>

      <AccountsDropdown
        onMouseOver={c}
        onMouseLeave={d}
        style={{
          transform: `translateY(${y}px)`,
        }}
      />

      <CartDropdown
        onMouseOver={e}
        onMouseLeave={f}
        style={{
          transform: `translateY(${z}px)`,
        }}
      ></CartDropdown>
    </>
  );
}

export default withRouter(Desktop);
