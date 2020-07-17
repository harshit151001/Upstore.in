//!library
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//!components
import appContext from '../../../Statemanagement/Createcontext';
import Categorycard from '../Cards/Categorycard';

const Categorylist = () => {
  const categorydata = useContext(appContext);
  return (
    <section>
      {categorydata.map(({ name, imagePath, _id }) => {
        return (
          <div key={_id} style={{ width: '280px', height: '90px' }}>
            <Link to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}>
              <Categorycard name={name} path={imagePath} id={_id} />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Categorylist;
