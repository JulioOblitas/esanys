import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import '../estilos/slider.css'
import styled from 'styled-components';
/*import img1 from './puntalesslider.jpg'
import img2 from 'assets/imagenes/puntalesslider.jpg'
import img3 from 'assets/imagenes/puntalesslider.jpg'
import img4 from 'assets/imagenes/puntalesslider.jpg'*/

const Slider2 = () => {
    const  img1 = 'assets/imagenes/principalslider.jpg'
    const  img2 = 'assets/imagenes/puntalesslider.jpg'
    const  img3 = 'assets/imagenes/puntalesslider.jpg'
    const  img4 = 'assets/imagenes/puntalesslider.jpg'
	return (
		<main>
			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img style={{ height:'22.5rem' }} src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img style={{ height:'22.5rem' }} src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img style={{ height:'22.5rem' }} src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img style={{ height:'22.5rem' }} src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>

			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Slider2;
