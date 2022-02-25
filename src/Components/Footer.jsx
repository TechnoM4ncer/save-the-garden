import '../App.css';
import '../index.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Footer() {
  return (
    <div className="footer">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright: YeastSoft
    </MDBContainer>
  </div>
  )
}