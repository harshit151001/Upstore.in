import React from 'react';
import './UpLoader.css';

export default function UpLoader() {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ margin: 'auto' }} className="loader"></div>
    </div>
  );
}
