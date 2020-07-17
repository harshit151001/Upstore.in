//!library
import React from 'react';

//!host adress
import API from '../../../backend';
import { Row, Col, Card } from 'react-bootstrap';

const Categorycard = ({ name, path }) => {
  const src = path.substr(6);
  return (
    <Card
      style={{
        boxShadow:
          'white 1px 1px 0px,rgba(0,0,0,0.3) 2px 0px 13px, rgba(0,0,0,0.3) 4px 10px 21px',
        margin: '2vw',
      }}
    >
      <Row>
        <Col>
          <Row style={{ margin: 'auto', justifyContent: 'center' }}>
            <img
              style={{
                width: '10vw',
                height: '10vw',
                margin: '1vw',
                minHeight: '60px',
                minWidth: '60px',
              }}
              src={`${API}/${src}`}
              alt={name}
            />
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
