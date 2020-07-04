import React from 'react';
import styled from 'styled-components';

const DesktopNav = styled.div`
  display: flex;
  width: 100vw;
  background: #004e98;
  height: 8vh;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #c0c0c0;
  z-index: 100;
  div {
    height: 8vh;
    width: 68%;
    display: flex;
    align-items: center;
    color: #ebebeb;
    font-size: 1.8em;
    justify-content: space-between;
    &:not(:nth-child(2)) {
      width: 16% !important;
      padding: 0 1.5% 0 1.5%;
      background: transparent;
    }
  }
`;

function Desktop() {
  return (
    <DesktopNav>
      <div>
        <span>Upstore</span>
        <span>
          <i class="fa fa-th" aria-hidden="true"></i>
        </span>
      </div>
      <div></div>
      <div>
        <span>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </span>
        <span></span>
      </div>
      <span></span>
    </DesktopNav>
  );
}

export default Desktop;
