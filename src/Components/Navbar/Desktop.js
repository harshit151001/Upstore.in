import React, { useState } from 'react';
import styled from 'styled-components';

//DESKTOP NAVBAR
/*********************************************************************/
const DesktopNav = styled.div`
  display: flex;
  width: 100vw;
  background: white;
  height: 9vh;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  box-shadow: 2px 3px 10px 6px rgba(0, 0, 0, 0.3);
  font-size: 26px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid aliceblue;
  z-index: 100;
  div {
    height: 9vh;
    width: 68%;
    display: flex !important;
    align-items: center;
    color: black;
    form {
      display: flex;
      height: 5vh;
      input {
        font-size: 24px;
        border: none;
        outline: none;
        background: #f5f5f6;
        width: 85%;
        &:focus {
          border: 1px solid black;
        }
      }
      button {
        outline: none;
        border: none;
        font-size: 24px;
        color: black;
        background: #f5f5f6;
        border-left: 1px solid rgb(100, 100, 100);
        width: 15%;
        &:nth-child(2):hover {
          background: hsla(278, 100%, 50%, 1);
          color: #f5f5f6;
        }
      }
      &:nth-child(1) {
        width: 34%;
        input {
          border-radius: 5px 0 0 5px;
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
          border-radius: 0px 5px 5px 0px;
          cursor: pointer;
        }
      }
    }
    &:not(:nth-child(2)) {
      width: 16% !important;
      padding: 0 1% 0 1%;
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
  height: 600px;
  background: #f5f5f6;
  z-index: 20;
  transition: all 0.2s ease-out;
`;
const AccountsDropdown = styled.div`
  position: fixed;
  padding-top: 9vh;
  top: -600px;
  right: 10%;
  width: 280px;
  height: 600px;
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
  height: 600px;
  background: #f5f5f6;
  z-index: 20;
  transition: all 0.2s ease-out;
`;

/*********************************************************************/

function Desktop() {
  /****************************/
  const [x, SetX] = useState(0);
  const a = () => SetX(600);
  const b = () => SetX(0);
  /****************************/
  const [y, SetY] = useState(0);
  const c = () => SetY(600);
  const d = () => SetY(0);
  /****************************/
  const [z, SetZ] = useState(0);
  const e = () => SetZ(600);
  const f = () => SetZ(0);
  /****************************/

  return (
    <>
      <DesktopNav>
        <div>
          <span>
            <p
              style={{
                fontFamily: 'Roboto',
                margin: '0px',
              }}
            >
              <span
                style={{
                  color: 'hsla(278, 100%, 50%, 1)',
                  fontFamily: 'Pacifico',
                  fontSize: '30px'
                }}
              >
                Up
              </span>
              store
            </p>
          </span>
          <span
            style={{ height: '9vh', display: 'flex', alignItems: 'center' }}
            onMouseOver={a}
            onMouseLeave={b}
          >
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
            <input type="text" placeholder="Search..." />
            <button disabled="">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div>
          <span
            style={{ height: '9vh', display: 'flex', alignItems: 'center' }}
            onMouseOver={c}
            onMouseLeave={d}
          >
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </span>
          <span
            style={{ height: '9vh', display: 'flex', alignItems: 'center' }}
          >
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </span>
          <span
            style={{ height: '9vh', display: 'flex', alignItems: 'center' }}
            onMouseOver={e}
            onMouseLeave={f}
          >
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
        </div>
      </DesktopNav>

      <CategoriesDropdown
        onMouseOver={a}
        onMouseLeave={b}
        style={{
          transform: `translateY(${x}px)`,
        }}
      >
        <h1>harshitshukla</h1>
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
      />
    </>
  );
}

export default Desktop;
