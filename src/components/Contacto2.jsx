import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';
function Contacto2() {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_d5n5bte','template_x2cqih8',event.target,'Zjo6mNYvNam9PYTZC')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
  
  
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" >Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Contacto2;