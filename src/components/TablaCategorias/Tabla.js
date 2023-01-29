import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

function BasicExample() {
  return (
<Container>
<Table striped bordered hover className='mt-2'>
      <thead>
        <tr>
          <th className='col-1'>#</th>
          <th className='col-1'>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'><InputGroup.Checkbox className='text-center' aria-label="Checkbox for following text input" /></td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
</Container>
    
  );
}

export default BasicExample;