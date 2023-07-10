import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {data} from "../helper/data"

const CardContainer = () => {
    const [search,setSearch] = useState("")
console.log(data)
    const handleChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    console.log(search)
  return (
    <>
      <Form.Control type="search" placeholder="SearchPlayer... " onChange={handleChange} />
      <Container className='p-3 rounded-4 card-container my-3'>
        <Row xs={2} md={4} lg={6} className='justify-content-center g-3'>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
            <Col>3 of 3</Col>

        </Row>
      </Container>
    </>
  )
}

export default CardContainer
