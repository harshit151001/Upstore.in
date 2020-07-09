import React from 'react';
import styled from 'styled-components';

const Mobilenav = styled.div`
  height: 9vh;
  width: 100vw;
  position: fixed;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 8px 6px rgba(0, 0, 0, 0.3);
  top: 0;
  display: flex;
  div {
    width: 48%;
    display: flex;
    height: 100%;
    background: white;
    padding: 0 2% 0 2%;
    align-items: center;
    font-size: 2rem;
    fontfamily: Roboto;
  }
`;
const Drawer = styled.div``;

function Mobile() {
  return (
    <Mobilenav>
      <div>
        <span
          style={{
            paddingRight: '10px',
          }}
        >
          <i className="fa fa-bars"></i>
        </span>
        <span style={{ transform: 'translateY(-2px)' }}>
          <p
            style={{
              fontFamily: 'Roboto',
              fontSize: '2rem',
            }}
          >
            <span
              style={{
                color: 'hsla(278, 100%, 50%, 1)',
                fontFamily: 'Pacifico',
              }}
            >
              Up
            </span>
            store
          </p>
        </span>
      </div>
      <div>
        <span>
          {' '}
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </span>
        <span>
          {' '}
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </span>
        <span>
          {' '}
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </span>
      </div>
    </Mobilenav>
  );
}

export default Mobile;
