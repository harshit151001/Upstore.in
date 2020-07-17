//!library
import React from 'react';
import styled from 'styled-components';
//!host adress
import API from '../../../backend';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Categorycard = ({ name, path }) => {
  const src = path.substr(6);
  return (
    <Card style={{ boxShadow: 'white 1px 1px 0px, violet 2px 0px 13px, pink 4px 10px 21px', margin: '2vw' }}>
      <Row>
        <Col>
          <Row style={{ margin: 'auto', justifyContent: 'center' }}>
            <img style={{ width: '10vw', height: '7vw', margin: '1vw', minHeight: '60px', minWidth: '50px' }} src={`${API}/${src}`} alt={name} />
          </Row>
          <Row style={{ margin: 'auto', justifyContent: 'center' }}>
            <h5 style={{ textAlign: 'center', color: 'grey' }}>{name}</h5>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Categorycard;
