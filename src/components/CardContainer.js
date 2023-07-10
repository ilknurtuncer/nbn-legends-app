import React from 'react'
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardContainer = () => {
  return (
    <>
      <Form.Control type="search" placeholder="SearchPlayer... " />
      <Container>
        <Row xs={2} md={4} lg={6}>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
            <Col>3 of 3</Col>

        </Row>
      </Container>
    </>
  )
}

export default CardContainer
