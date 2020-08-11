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

//DESKTOP NAVBAR
/*********************************************************************/
const DesktopNav = styled.div`
  display: flex;
  width: 100vw;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  height: 9vh;
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
  border-top: 10px solid #ec436f;
  top: -600px;
  left: 10%;
  width: 280px;
  z-index: 20;
  transition: all 0.2s ease-out;
`;
const AccountsDropdown = styled.div`
  position: fixed;
  margin-top: 6vh;
  top: -600px;
  right: 10%;
  width: 280px;

  z-index: 20;
  transition: all 0.2s ease-out;
`;
const CartDropdown = styled.div`
  position: fixed;
  margin-top: 6vh;
  top: -600px;
  right: 0;
  width: 280px;

  z-index: 20;
  transition: all 0.2s ease-out;
`;

/*********************************************************************/

function Desktop(props) {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  /****************************/
  const [x, SetX] = useState(0);
  const a = () => SetX(620);
  const b = () => SetX(0);
  /****************************/
  const [y, SetY] = useState(0);
  const c = () => SetY(620);
  const d = () => SetY(0);
  /****************************/
  const [z, SetZ] = useState(0);
  const e = () => SetZ(620);
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

  return (
    <>
      <DesktopNav>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span>
              <p
                style={{
                  fontFamily: 'Poppins',
                  margin: '0px',
                  transform: 'translateY(-4px)',
                  color: 'rgba(20,20,20)',
                }}
              >
                <span
                  style={{
                    color: '#ec436f',
                    fontFamily: 'Pacifico',
                    fontSize: '30px',
                    textDecoration: 'none',
                  }}
                >
                  Up
                </span>
                store
              </p>
            </span>
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
          <form>
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
                  padding: '0px 20px 0px 20px',
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
            style={{ ouline: 'none', border: 'none', color: 'rgb(20,20,20)' }}
          >
            <Link
              to="/userdashboard"
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
            style={{ ouline: 'none', border: 'none', color: 'rgb(20,20,20)' }}
          >
            <Link
              to="/wishlist"
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
                color: 'inherit',
              }}
              to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
            >
              <button
                type="button"
                className="btn btn-light d-block w-100 text-left deschhjb"
                style={{ borderRadius: '0' }}
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
