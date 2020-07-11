import React from 'react';
import Card from "react-bootstrap/Card";

function Cards({ image }) {
  
  return (
    <Card style={{paddingLeft:'5px' ,paddingRight:"5px"}}>
    <Card.Img variant="top" src={image}  style={{height:"150px"}}/>
    <Card.Body style={{background:'black'}}>
      <Card.Title style={{color:"white"}}>Card title</Card.Title>
      <Card.Text style={{color:"white"}}>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer >
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  );
}

export default Cards;
