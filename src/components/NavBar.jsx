import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'; 
import { Navbar, Container, Nav,   NavDropdown, Button, Form } from "react-bootstrap";  
import { NavLink, Link,  Route, Routes } from "react-router-dom";
import CardsEC from "./CardsEC"
import "../estilos/navbar.css"
import Cotizacion from "../views/Cotizacion"
export default function NavBar() {

  

  const [productos, setProductos] = useState(
    [{        
        id : 1,
        nombre : 'ESCALERA SIMPLE AL',
        imagen:"/assets/imagenes/escaleratijera_aluminio.jpg",
        precio: 30.00,
        tipoproducto: 'ESCALERAS',
        tipoproducto_id: 1,
        unimed:'UNIDAD',
        unimed_id: 1 
        
    },
    
    {        
      id : 2,
      nombre : 'ESCALERA DOBLE AL',
      imagen:"/assets/imagenes/escalera-tijera-doble-aluminio.jpg",          
      precio: 30.00,
      tipoproducto: 'ESCALERAS',
      tipoproducto_id: 1,
      unimed:'UNIDAD',
      unimed_id: 1 
      
    },
    {        
      id : 3,
      nombre : 'ESCALERA SIMPLE FV',          
      imagen:"/assets/imagenes/escalera.jpg",
      precio: 30.00,
      tipoproducto: 'ESCALERAS',
      tipoproducto_id: 1,
      unimed:'UNIDAD',
      unimed_id: 1 
      
  },
  {        
    id : 4,
    nombre : 'ESCALERA DOBLE FV',
    imagen:"/assets/imagenes/escaleradobleaccesoFV.jpg",        
    precio: 30.00,
    tipoproducto: 'ESCALERAS',
    tipoproducto_id: 1,
    unimed:'UNIDAD',
    unimed_id: 1 
    
},
{        
  id : 5,
  nombre : 'ESCALERA TELESCOPIC. FV',      
  imagen:"/assets/imagenes/escalera-telescopicaFV.jpg",      
  precio: 30.00,
  tipoproducto: 'ESCALERAS',
  tipoproducto_id: 1,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},
{        
id : 6,
nombre : 'ESCALERA TELESCOPIC. AL ',
imagen:"/assets/imagenes/escaleratelescopicaaluminio.png",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 7,
nombre : 'ESCALERA EMBONABLE FV',
imagen:"/assets/imagenes/escaleraembonable.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 8,
nombre : 'ESCALERA SIMPLE 4 PASOS',
imagen:"/assets/imagenes/escalera-banqueta-aluminio.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 9,
nombre : 'ESCALERA SIMPLE 3 PASOS',
imagen:"/assets/imagenes/escaleraacero3pasos.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 1,
unimed:'UNIDAD',
unimed_id: 1 

}, 
{        
id : 10,
nombre : 'ANDAMIO ACROW',
imagen:"/assets/imagenes/Andamios-Multidireccionales.jpg",
precio: 30.00,
tipoproducto: 'ANDAMIOS',
tipoproducto_id: 2,
unimed:'UNIDAD',
unimed_id: 1 

}, 
{        
id : 11,
nombre : 'ANDAMIO CONVENCIONAL',
imagen:"/assets/imagenes/Andamios-Convencional.jpg",
precio: 30.00,
tipoproducto: 'ANDAMIOS',
tipoproducto_id: 2,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 12,
nombre : 'PUNTALES',
imagen:"/assets/imagenes/puntal.png",
precio: 30.00,
tipoproducto: 'SUMINISTROS CONSTRUCCION',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 13,
nombre : 'TROMPO METALICO',
imagen:"/assets/imagenes/trompometalico.png",
precio: 30.00,
tipoproducto: 'SUMINISTROS CONSTRUCCION',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 1 

},

{        
id : 14,
nombre : 'ARNES + LINEA DE VIDA',
imagen:"/assets/imagenes/arnes.jpg",
precio: 30.00,
tipoproducto: 'IMPLEMENTOS SEGURIDAD',
tipoproducto_id: 4,
unimed:'UNIDAD',
unimed_id: 1 

},
{        
id : 15,
nombre : 'CASCO DE SEGURIDAD',
imagen:"/assets/imagenes/casco.jpg",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 3 

},
{        
id : 16,
nombre : 'MOSQUETON',
imagen:"/assets/imagenes/mosqueton.png",
precio: 30.00,
tipoproducto: 'ESCALERAS',
tipoproducto_id: 3,
unimed:'UNIDAD',
unimed_id: 3 

}
]); 
const [modalShow, setModalShow] = useState(false);  
const [productosori, setProductosori] = useState(productos)        
const [alquiler, setAlquiler] = useState(false)        
  
const Mensaje   =  () =>{
    {/*setModalShow(true)*/}
    Swal.fire(
      'ESANYS',
      'Email: ventas@esanys.pe => 996 824 484 => HILDA SURICHAQUI',            
      'success'      
    )
  
}

const Filtro   =  (e, cat, tipo) =>{


   if (cat == 0  ){
    
    setProductos(productosori) 
    
   } else{
   
 
   
    const productotempo = productosori
    const prodfiltrados  = productotempo.filter(prod => prod.tipoproducto_id == cat);        
    setProductos(prodfiltrados)
   }
    
   if( tipo == 0){      
        setAlquiler(false)      
      }
      
      if( tipo == 1){      
        setAlquiler(true)      
      }
      
   
  

    

        
 /* Swal.fire(
    'ESANYS',
    'CONTACTO : HILDA SURICHAQUI -> 996 824 484',        
    'success'      
  )*/

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
            {/*<Nav.Link href="#features">INICIO</Nav.Link>*/}
            <Nav.Link onClick={(e) => {Filtro(e,0,0)}}>INICIO</Nav.Link>
            <NavDropdown title="CATEGORIAS" id="collasible-nav-dropdown" className="me-4">
              <NavDropdown.Item onClick={(e) => {Filtro(e,0,0)}}>TODOS</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => {Filtro(e,1,0)}}>ESCALERAS</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => {Filtro(e,2,0)}}>ANDAMIOS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => {Filtro(e,3,0)}}>SUMIN. DE CONSTRUCCION</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => {Filtro(e,4,0)}}>IMPLEMENTOS DE SEGURIDAD</NavDropdown.Item>
              
              
            </NavDropdown>

            <NavDropdown title="SERVICIOS" id="collasible-nav-dropdown" className="me-4">         
            <NavDropdown.Item onClick={(e) => {Filtro(e,1,1)}}> ALQUILER DE ESCALERAS</NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => {Filtro(e,2,1)}}>ALQUILER DE ANDAMIOS</NavDropdown.Item>
              
              
              
            </NavDropdown>
          
         
          </Nav>
          <Nav className="mx-auto">   
         {/*

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              
              aria-label="Search"

            />
            <Button variant="primary">BUSCAR</Button>
    </Form>*/}
          </Nav>
          <Nav>
            <Button variant="danger" className="me-4" onClick={() => {Mensaje()}} >CONTACTO</Button>

            
         {/*  <Cotizacion show={modalShow} onHide={() => setModalShow(false)} />*}
    
          {/*  <Button variant="primary" className="me-4" >LOGIN</Button>*/}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    <Routes>
     
     <Route  path = "/" element = { <CardsEC  productos={productos} alquiler= {alquiler}/>} />
     
   </Routes>
    
    
    </>   
    
   )
  
}
