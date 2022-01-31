import '../App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, IndexLink } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

export default function Header() {
  return (
<Navbar bg="dark" variant="dark">
  <Nav className="container-fluid">
    <Nav.Item>
      <Navbar.Brand as={Link} to="/">Demo App</Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/user-list">User List</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Log Out</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
      <Nav pullRight> 
        <img src="src/Assets/shoppingcart.png" alt="Shopping Cart" width="32" height="32"/>
       
      </Nav>
    </Nav.Item>
  </Nav>
</Navbar>
  )
}