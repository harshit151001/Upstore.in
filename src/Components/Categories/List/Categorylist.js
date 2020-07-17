//!library
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//!components
import appContext from '../../../Statemanagement/Createcontext';
import Categorycard from '../Cards/Categorycard';
import { Row, Col, Container } from 'react-bootstrap';

const Categorylist = () => {
  const categorydata = useContext(appContext);
  return (
    <Row style={{ width: '86%', margin: 'auto' }}>
      {categorydata.map(({ name, imagePath, _id }) => {
        return (
          <Col xs={6} md={4} key={_id}>
            <Link style={{ textDecoration: 'none' }} to={`/products/${_id}/5eff8e76d75ecb3735b243b1`}>
              <Categorycard name={name} path={imagePath} id={_id} />
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default Categorylist;

