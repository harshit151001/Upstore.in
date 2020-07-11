import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";
import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";
import i4 from "../Images/i4.jpg";
import i5 from "../Images/i5.jpg";
import { CardGroup, Container, Nav } from "react-bootstrap";

const Carousel1 = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container style={{ height: "30vw", paddingTop: "70px" }}>
      <Nav
        variant="tabs"
        style={{ display: "block" }}
        defaultActiveKey="#first"
      >
        <Nav.Item>
          <Nav.Link href="#first">Categories</Nav.Link>
        </Nav.Item>
        </Nav>  
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}         
          indicators={false}
        >
          <Carousel.Item>
            <CardGroup>
              <Cards image={i1} />
              <Cards image={i2} />
              <Cards image={i3} />
              <Cards image={i4} />
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
              <Cards image={i4} />
              <Cards image={i1} />
              <Cards image={i2} />
              <Cards image={i3} />
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      
    </Container>
  );
};

export default Carousel1;
