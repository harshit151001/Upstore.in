import React from 'react';
import Productlist from '../Products/List/Productlist';
import { Row, Col } from 'react-bootstrap';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner';
import Filters from '../Filters/Filters';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import Paging from '../../Components/Pagination/Pagination';

const Products = props => {
  const { categoryId } = props.match.params;
  const { width } = useWindowDimensions();
  return (
    <>
      <WelcomeBanner />
      <Row>
        {width > 760 && (
          <Col xs={0} md={2} lg={2}>
            <Filters />
          </Col>
        )}

        <Col xs={12} md={10} lg={10} style={{ marginTop: '2vw' }}>
          <Productlist categoryId={categoryId} />
        </Col>
      </Row>
    </>
  );
};

export default Products;
