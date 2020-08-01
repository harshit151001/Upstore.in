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
        margin: '2vw',
        minHeight: '130px',
        boxShadow:'white 1px 1px 0px,rgba(0,0,0,0.3) 1px 0px 5px, rgba(0,0,0,0.3) 2px 5px 5px',
      }}
      className="hoveroncategory"
    >
      <Row>
        <Col>
          <Row style={{ margin: 'auto', justifyContent: 'center' }}>
            <img
              style={{
                width: '50px',
                height: '50px',
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
