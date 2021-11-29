import React from 'react';
import { Button,Container,Card,Row,Col } from 'react-bootstrap';
import './style.css'
const Body_part = () => {
    return (
        <div>
        {/* Top rated car part */}

        <Container className='cust_width margin_top'>
            <h1>Top Rated Car</h1>

           

             <Row>
                <Col className="col-12 p-3"  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/top_rated/1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 p-3" md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/top_rated/2.jpg"  />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 p-3"  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/top_rated/3.jpg"  />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 p-3"  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/top_rated/4.jpg"  />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
        </Container>
  

        </div>
    );
};

export default Body_part;