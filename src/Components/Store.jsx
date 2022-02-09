import '../App.css';
import '../index.css';
import Header from './Header.jsx';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function Store() {
  return (
    <body className = {"body"}>
        <Header />
        <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Bamboo Napkins</MDBCardTitle>
        <MDBCardText>
        50 count of 5" x 5" bamboo table napkins.
        </MDBCardText>
        <MDBBtn href='#'>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </body>
  );
}