import React from 'react';
import { Button,Container,Card,Row,Col } from 'react-bootstrap';
import './style.css'
import { FaStar } from "react-icons/fa";
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
                        <Card.Title>Toyota 4Runner</Card.Title>
                        <div class="d-flex justify-content-between">
                            <p>$12000</p>
                            <div class="d-flex justify-content-between">
                            <span> <FaStar/></span>
                            <span> <FaStar/></span>
                            <span> <FaStar/></span>
                            <span> <FaStar/></span>
                            <span> <FaStar/></span>
                            <span>(5 Reviews)</span>
                           
                            
                            </div>
                        </div>
                        <Card.Text className='pt-2 pb-2'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
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

            <Row>
                <Col className="col-12 p-3"  md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/top_rated/5.jpg" />
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
                    <Card.Img variant="top" src="images/top_rated/6.jpg"  />
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
                    <Card.Img variant="top" src="images/a.jpg"  />
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
                    <Card.Img variant="top" src="images/b.jpg"  />
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