import Swal from 'sweetalert2'
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  
import { NavLink, Link,  Route, Routes } from "react-router-dom";
import CardsEC from "./CardsEC"
import "../estilos/navbar.css"

export default function NavBar() {

  const Mensaje   =  () =>{
        
    Swal.fire(
      'ESANYS',
      'CONTACTO : HILDA SURICHAQUI -> 996 824 484',        
      'success'      
    )
  
}

    return (
      <>
     
     
    {/* <Navbar  bg="light" expand="md" className="navbar mb-2" fixed="top" >*/}
    
    <Navbar   bg="light" expand="md" className="navbar mb-2" fixed="top">
      
      <Container fluid>
      <Navbar.Brand href="#" style={{ color: "white"  }} >ESANYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">INICIO</Nav.Link>
            
            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown" className="me-4">
            <NavDropdown.Item href="#action3">ESCALERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action4">ANDAMIOS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">IMPLEMENTOS DE SEGURIDAD</NavDropdown.Item>
              <NavDropdown.Item href="#action5">SUMIN. DE CONSTRUCCION</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ACTIVOS INDUSTRIALES MENORES
              </NavDropdown.Item>
            </NavDropdown>
          
         
          </Nav>
          <Nav className="mx-auto">   
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              
              aria-label="Search"

            />
            <Button variant="primary">BUSCAR</Button>
          </Form>
          </Nav>
          <Nav>
            <Button variant="danger" className="me-4" onClick={() => {Mensaje()}} >CONTACTO</Button>
            <Button variant="primary" className="me-4" >LOGIN</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    <Routes>
     
     <Route  path = "/" element = { <CardsEC/>} />
     
   </Routes>
    
    
    </>   
    
   )
  
}
