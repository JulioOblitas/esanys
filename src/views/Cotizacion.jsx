import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const nft = "/assets/imagenes/casco.jpg"

function Cotizacion(props) {


    return(

    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        COTIZACION
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
      <Row>
          <Col xs={12} md={8}>
            RUC
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            RAZON SOCIAL
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            CONDICION
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            PERIODO
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            UBIC. ENTREGA
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            FEC. ENTREGA
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4}>
            HORA. ENTREGA
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row>


      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
}

export default Cotizacion