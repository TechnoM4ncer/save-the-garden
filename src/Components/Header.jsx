import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router-dom';
import shoppingcart from '../Assets/shoppingcart.png';



export default function Header() {
  return (
<Navbar bg="dark" variant="dark">
  <Nav className="container-fluid">
    <Nav.Item>
      <Navbar.Brand as={Link} to="/">Gaia's Garden</Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/user-list">Shop</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>About</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
      <Nav pullRight> 
        <img src={shoppingcart} alt="Shopping Cart" width="32" height="32"/>
       
      </Nav>
    </Nav.Item>
  </Nav>
</Navbar>
  )
}