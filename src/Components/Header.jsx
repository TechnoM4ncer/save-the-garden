import '../App.css';
import '../index.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shoppingcart from '../Assets/shoppingcart.png';
import gaiaLogo from '../Assets/gaialogo.png';



export default function Header() {
  return (
<Navbar className= "navbar-header" sticky = "top" variant="dark">
  <Nav className="container-fluid">
    <Nav.Item>
    <Nav.Link as={Link} to="/">
    <img className = "logo" src={gaiaLogo} alt="Gaia's Garden" width="150" height="90"/>
    </Nav.Link>
    </Nav.Item>
    <Nav.Item className = "nav-button">
      <Nav.Link as={Link} to="/store">Shop</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to = "/Components/About.jsx">About</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
      <Nav pullRight> 
        <Nav.Link as={Link} to="/cart">
        <img src={shoppingcart} alt="Shopping Cart" width="50" height="50"/>
        </Nav.Link>
      </Nav>
    </Nav.Item>
  </Nav>
</Navbar>
  )
}