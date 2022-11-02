import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} className='panes'/>
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>${props.precio}</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
    </Card>
  )
};

export default ItemDetail;
    