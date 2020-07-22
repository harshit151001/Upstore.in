import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MobileNav = styled.div`
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
    width: 92%;
    height: 100%;
    align-items: center;
    display: flex;
  }
`;
const Span = styled.span`
  height: 9vh;
  align-items: center;
  display: flex;
`;

const Mobile = () => {
  return (
    <MobileNav>
      <div>
        <div>
          <span>
            <i className="fa fa-bars" aria-hidden="true" />
          </span>
          <Link to="/" style={{ textDecoration: 'none', marginLeft: '8px' }}>
            <span>
              <p
                style={{
                  fontFamily: 'Poppins',
                  margin: '0px',
                  transform: 'translateY(-2px)',
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
        </div>
        <div
          style={{
            justifyContent: 'flex-end',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Span>
            <i className="fa fa-search"></i>
          </Span>
          <Span>
            <i className="fa fa-search"></i>
          </Span>
          <Span>
            <i className="fa fa-search"></i>
          </Span>
        </div>
      </div>
    </MobileNav>
  );
};

export default Mobile;
