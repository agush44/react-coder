import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container fluid>
                <NavLink to={'/'} href="#" className="brand">Boule</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 nav"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavLink to={`/categoria/pandecampo`} className="links" href="">Pan de campo</NavLink>
                        <NavLink to={`/categoria/panlactal`} className="links" href="">Pan lactal</NavLink>
                        <NavLink to={`/categoria/focaccia`} className="links" href="">Focaccia</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}

export default NavBar
