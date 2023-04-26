import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import "../estilos/cardecomerce.css";
/*import Col from 'react-bootstrap/Col';*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer2 from "./Footer2";
export default function CardsEC({ productos, alquiler }) {
  console.log(alquiler);
  /* const productos =
        [{        
            id : 1,
            nombre : 'LE AL',
            imagen:"/assets/imagenes/escaleratijera_aluminio.jpg",
            precio: 30.00,
            tipoproducto: 'ESCALERAS',
            tipoproducto_id: '1',
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
  id : 9,
  nombre : 'ANDAMIO ACROW',
  imagen:"/assets/imagenes/Andamios-Multidireccionales.jpg",
  precio: 30.00,
  tipoproducto: 'ANDAMIOS',
  tipoproducto_id: 2,
  unimed:'UNIDAD',
  unimed_id: 1 
  
}, 
{        
  id : 10,
  nombre : 'ANDAMIO CONVENCIONAL',
  imagen:"/assets/imagenes/Andamios-Convencional.jpg",
  precio: 30.00,
  tipoproducto: 'ANDAMIOS',
  tipoproducto_id: 2,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},
{        
  id : 11,
  nombre : 'PUNTALES',
  imagen:"/assets/imagenes/puntal.png",
  precio: 30.00,
  tipoproducto: 'SUMINISTROS CONSTRUCCION',
  tipoproducto_id: 3,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},
{        
  id : 12,
  nombre : 'TROMPO METALICO',
  imagen:"/assets/imagenes/trompometalico.png",
  precio: 30.00,
  tipoproducto: 'SUMINISTROS CONSTRUCCION',
  tipoproducto_id: 3,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},

{        
  id : 13,
  nombre : 'ARNES + LINEA DE VIDA',
  imagen:"/assets/imagenes/arnes.jpg",
  precio: 30.00,
  tipoproducto: 'IMPLEMENTOS SEGURIDAD',
  tipoproducto_id: 4,
  unimed:'UNIDAD',
  unimed_id: 1 
  
},
{        
  id : 14,
  nombre : 'CASCO DE SEGURIDAD',
  imagen:"/assets/imagenes/casco.jpg",
  precio: 30.00,
  tipoproducto: 'ESCALERAS',
  tipoproducto_id: 3,
  unimed:'UNIDAD',
  unimed_id: 3 
  
},
{        
  id : 15,
  nombre : 'MOSQUETON',
  imagen:"/assets/imagenes/mosqueton.png",
  precio: 30.00,
  tipoproducto: 'ESCALERAS',
  tipoproducto_id: 3,
  unimed:'UNIDAD',
  unimed_id: 3 
  
}
]*/
  const Mensaje = () => {
    Swal.fire("ESANYS", "Email: ventas@esanys.pe => 954 451 473", "success");
  };

  return (
    <Container fluid="md" className="adicrow">
      <Row xs={1} md={4} className="g-2">
        {productos.map((prod, i) => (
          <Card
            key={prod.id * 2}
            className="card mb-2"
            style={{
              width: "20.3rem",
              height: "27.8rem",
              marginTop: "0.5rem",
              marginLeft: "0.4rem",
            }}
          >
            {/*<Link key={prod.id * 1}    to={`/detalleproducto/${prod.id}` } >          */}
            <Link
              key={prod.id * 1}
              onClick={(e) => {
                Mensaje();
              }}
              to={`/`}
            >
              <Card.Img
                key={prod.id * 3}
                style={{ height: "22.5rem" }}
                src={prod.imagen}
                alt=""
              />

              <Card.Body key={prod.id * 4} className="tarjeta">
                <Card.Title key={prod.id * 5}>{prod.nombre}</Card.Title>

                {alquiler ? (
                  <Card.Text key={prod.id * 6} className="cardtexto">
                    Alquiler + Serv. Logistico{" "}
                    {/* S/ {prod.precio.toFixed(2)}*/}
                  </Card.Text>
                ) : (
                  <Card.Text key={prod.id * 6} className="cardtexto">
                    {/*S/ {prod.precio.toFixed(2)}*/}
                  </Card.Text>
                )}
              </Card.Body>

              {/*<div className='divbtncantidad'>
          <button className='btnanadircantcarrito'  key={prod.id*7} id = {prod.id}  onClick={(e) => {Alert('HOLA1')}} >+</button>
          <button className='btneliminarcantcarrito'  key={prod.id*8} id = {prod.id}  onClick={(e) => {Alert('HOLA1')}} > -</button>
         </div>     */}
            </Link>
          </Card>
        ))}
      </Row>

      <Footer2 />
    </Container>
  );
}
