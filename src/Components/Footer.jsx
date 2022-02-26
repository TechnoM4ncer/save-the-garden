import '../App.css';
import '../index.css';
import {MDBContainer} from "mdbreact";

export default function Footer() {
  return (
    <div className="footer">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright: YeastSoft
    </MDBContainer>
  </div>
  )
}