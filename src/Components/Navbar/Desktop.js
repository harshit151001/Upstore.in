import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { appContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
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
  box-shadow: 2px 3px 10px 6px rgba(0, 0, 0, 0.3);
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
  padding-top: 9vh;
  top: -600px;
  left: 10%;
  width: 280px;
  background: #ffffff;
  z-index: 20;
  transition: all 0.2s ease-out;
  border: 1px solid grey;
`;
const AccountsDropdown = styled.div`
  position: fixed;
  padding-top: 9vh;
  top: -600px;
  right: 10%;
  width: 280px;
  background: #f5f5f6;
  z-index: 20;
  transition: all 0.2s ease-out;
`;
const CartDropdown = styled.div`
  position: fixed;
  padding-top: 9vh;
  top: -600px;
  right: 0;
  width: 280px;
  background: #f5f5f6;
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
        const query = enteredFilter.length === 0 ? '' : `?search=${enteredFilter}`;
        fetch('http://localhost:8000/api/search/products/5eff8e76d75ecb3735b243b1' + query).then(response => {
          response
            .json()
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                  color: 'rgba(20,20,20)'
                }}
              >
                <span
                  style={{
                    color: '#ec436f',
                    fontFamily: 'Pacifico',
                    fontSize: '30px',
                    textDecoration: 'none'
                  }}
                >
                  Up
                </span>
                store
              </p>
            </span>
          </Link>
          <span style={{ height: '9vh', display: 'flex', alignItems: 'center' }} onMouseOver={a} onMouseLeave={b}>
            <i className="fa fa-th" aria-hidden="true"></i>
          </span>
        </div>

        <div>
          <form action="">
            <input type="text" placeholder="Aurangabad" disabled="disabled" />
            <button disabled="disabled">
              <i className="fa fa-map" aria-hidden="true"></i>
            </button>
          </form>
          <form action="">
            <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
            <Link to={`/products/search/5eff8e76d75ecb3735b243b1?page=1&&search=` + enteredFilter}>
              <button disabled="">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </Link>
          </form>
        </div>
        <div>
          <Link to="/userdashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{ height: '9vh', display: 'flex', alignItems: 'center' }} onMouseOver={c} onMouseLeave={d}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </span>
          </Link>
          <span
            style={{
              height: '9vh',
              display: 'flex',
              alignItems: 'center',
              color: '#ec436f'
            }}
          >
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <Link to={!state.loggedIn ? '/loginsignup' : `/cart/${isAutheticated().user._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{ height: '9vh', display: 'flex', alignItems: 'center' }} onMouseOver={e} onMouseLeave={f}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
          </Link>
        </div>
      </DesktopNav>

      <CategoriesDropdown
        onMouseOver={a}
        onMouseLeave={b}
        style={{
          transform: `translateY(${x}px)`
        }}
      >
        <ul>
          {' '}
          {categorydata.map(({ name, _id }) => {
            return (
              <div key={_id} style={{ display: 'block' }}>
                <Link
                  className="deschhjb"
                  style={{
                    textDecoration: 'none',
                    color: 'rgb(20,20,20)',
                    fontFamily: 'Poppins'
                  }}
                  to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
                >
                  {name}
                </Link>
              </div>
            );
          })}{' '}
        </ul>
      </CategoriesDropdown>

      <AccountsDropdown
        onMouseOver={c}
        onMouseLeave={d}
        style={{
          transform: `translateY(${y}px)`
        }}
      />

      <CartDropdown
        onMouseOver={e}
        onMouseLeave={f}
        style={{
          transform: `translateY(${z}px)`
        }}
      ></CartDropdown>
    </>
  );
}

export default Desktop;
