//!library
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Categorycard from '../Cards/Categorycard';
import { Header } from '../../Feautures/Features';
import { appContext } from '../../../Statemanagement/Statecontext';

const Categorylist = () => {
  const { state } = useContext(appContext);
  const { categorydata } = state;

  return (
    <div
      className="row"
      style={{
        margin: 'auto',
        background: '#ffffff',
        paddingRight: '4vw',
        paddingLeft: '4vw',
      }}
    >
      <div className="col-12">
        <Header>Shop for categories</Header>
      </div>
      {categorydata.map(({ name, imagePath, _id }) => {
        return (
          <div className="col-md-4 col-6" key={_id}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}
            >
              <Categorycard name={name} path={imagePath} id={_id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categorylist;
