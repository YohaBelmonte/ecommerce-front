import {Button, Modal, InputGroup, Form} from 'react-bootstrap';

function ForgotPassword (props) {

  return (
    <Modal
      {...props}
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="p-3">
          Recuperación de Contraseña
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-5'>
        <p className='fs-5'>
          Por favor, introduzca su nombre de usuario o correo electrónico. A continuación recibirá por correo electrónico un enlace para crear una nueva contraseña.
        </p>
        <InputGroup>
        <Form.Control
          placeholder="Ingrese su correo electrónico o nombre de Usuario"
          aria-label="Recipient's username"
          aria-describedby="inputGroup-sizing-default"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='btn-dark rounded-0 px-3'>Enviar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForgotPassword;