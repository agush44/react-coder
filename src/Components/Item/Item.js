import './Item.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Item = ({ nombre, img, precio, categoria, id }) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} className='panes'/>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Card.Text>${precio}</Card.Text>
          <NavLink to={`item/${id}`}><Button variant="primary">Ver detalle</Button></NavLink>
        </Card.Body>
      </Card>
    );
  }

export default Item;
