import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    <>
      <div className='d-flex justify-content-center my-3'>
      <Card className='col-3'>
        <Card.Header>Ingresos</Card.Header>
        <Card.Body>
          <Card.Title>Noviembre</Card.Title>
          <Card.Text>
            Total por ventas = $1.000.000
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='col-3'>
        <Card.Header>Ingresos</Card.Header>
        <Card.Body>
          <Card.Title>Diciembre</Card.Title>
          <Card.Text>
            Total por ventas = $8.000.000
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='col-3'>
        <Card.Header>Ingresos</Card.Header>
        <Card.Body>
          <Card.Title>Enero</Card.Title>
          <Card.Text>
            Total por ventas = $2.000.000
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      <div className='d-flex justify-content-center my-3'>
      <Card className='col-3'>
        <Card.Header>Pedidos</Card.Header>
        <Card.Body>
          <Card.Title>Noviembre</Card.Title>
          <Card.Text>
            Total pedidos = 489
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='col-3'>
        <Card.Header>Pedidos</Card.Header>
        <Card.Body>
          <Card.Title>Diciembre</Card.Title>
          <Card.Text>
          Total pedidos = 3426
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className='col-3'>
        <Card.Header>Pedidos</Card.Header>
        <Card.Body>
          <Card.Title>Enero</Card.Title>
          <Card.Text>
          Total pedidos = 977
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
     
    </>
  );
}

export default WithHeaderExample;