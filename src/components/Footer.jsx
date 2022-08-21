import "../estilos/footer.css";


function Footer() {
    const imgFacebook = "/assets/imagenes/facebook.png"
    const imgInstagram = "/assets/imagenes/instagram.png"
    const imgWatssapp = "/assets/imagenes/watssapp3.png"
    const imgemail   =   "/assets/imagenes/email.png"
    const imgtelefono = "/assets/imagenes/watssapp.png"
    const imgdireccion = "/assets/imagenes/direccion.png"
    
    return (
        <>
        <div className="container">
        <footer className="py-5">
        <div className="row">
        <div className="col-6 col-md-2 mb-3">

                                
                <div className="itemcontacto">
                    CONTACTO
                </div> 
                <div className="item col-6 col-md-2 mb-3" >
                        <img  className='imglogocontactodireccion'  src= {imgdireccion}  alt=""/>                
                </div>
                <div className="item2">
                   Av los Sauces 380 Surquillo - Lima - Peru
                </div> 
                
                <div className="item">
                    <img  className='imglogocontactotelefono'  src= {imgtelefono}  alt=""/>                
                </div>
                <div className="item2">
                    934586160 / 999616327 
                </div>
                
                <div className="item">
                    <img  className='imglogocontactoemail'  src= {imgemail}  alt=""/>
                </div>
                <div className="item2">
                    contigocliente@esanys.pe
                </div>
            </div>  
            <div className='contenedorredessociales' >
                <br />

                <div className="itemredessociales">
                    REDES SOCIALES
                </div> 
                    <div className="itemimgredsoc">
                        <img  className='imglogoredes'  src= {imgFacebook}  alt=""/>
                    </div>
                    <div className="itemimgredsoc">
                        <img  className='imglogoredes'  src= {imgInstagram}  alt=""/>     
                    </div>
                    <div className="itemimgredsoc">
                    <img  className='imglogoredes'  src= {imgWatssapp}  alt=""/>     
                    </div>
                </div>   
                </div>
                </footer>        
                </div>

        </>
        
    )
}

export default Footer

