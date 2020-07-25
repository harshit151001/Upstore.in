import React, { useContext } from 'react';
import { appContext } from '../../Statemanagement/Statecontext';
import './loader.css';
const Loader = () => {
  const { state } = useContext(appContext);
  const { loading } = state;
  return (
    loading && (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          position: 'fixed',
          background: 'rgba(0, 0, 0, 0.2)',
          zIndex: '10000',
        }}
      >
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  );
};

export default Loader;
