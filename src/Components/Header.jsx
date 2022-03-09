import '../App.css';
import '../index.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    <Nav.Item style = {{paddingLeft: "1%"}}>
      <Nav.Link as={Link} to="/Components/Store.jsx">Shop</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to = "/Components/About.jsx">About</Nav.Link>
    </Nav.Item>
  </Nav>
</Navbar>
  )
}