import React from 'react';
import "../estilos/footer.css";
import {  MDBFooter, MDBContainer,  MDBCol, MDBRow} from 'mdb-react-ui-kit';

const imgDireccion = "/assets/imagenes/direccion.png"
const imgInstagram = "/assets/imagenes/instagram.png"
const imgWatssapp = "/assets/imagenes/watssapp3.png"
const imgEmail   =   "/assets/imagenes/email.png"
const imgTelefono = "/assets/imagenes/watssapp.png"
const imgFacebook = "/assets/imagenes/facebook.png"

 function Footer2 ()  {
  return (
      <>
      
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted contenedorpie2'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           
          <MDBCol md="4" lg="3" xl="4" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                            
              <p>
              <img  className='imglogocontactodireccion me-4'  src= {imgDireccion}  alt=""/>                  
                                
              Calle San Fernando Surquillo - Lima 
              </p>
              <p>
                
                <img  className='imglogocontactotelefono me-4'  src= {imgTelefono}  alt=""/>                
                996 824 484 / 954 451 473
              </p>
              <p>
              <img  className='imglogocontactoemail me-4'  src= {imgEmail}  alt=""/>
              ventas.esanysinversiones@gmail.com
              </p>
              
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>REDES SOCIALES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  
                  <img  className='imglogoredes'  src= {imgFacebook}  alt=""/>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <img  className='imglogoredes'  src= {imgInstagram}  alt=""/>     
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <img  className='imglogoredes'  src= {imgWatssapp}  alt=""/>     
                </a>
              </p>
              
            </MDBCol>

            
            
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4  colortexto' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:  
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           SOPORTE INADCO S.A.
        </a>
      </div>
    </MDBFooter>
    </>  
  )  
}
  
export default Footer2




