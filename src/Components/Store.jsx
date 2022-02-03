import '../App.css';
import '../index.css';
import susearth from '../Assets/susearth.png';
import Header from './Header.jsx';

export default function Store() {
  return (
    <body className = {"body"}>
        <Header />

        <img src = {susearth} width = "80%" height = "80%" />

        <div className="bodyText">

        <h1>UNDER CONSTRUCTION</h1>

        </div>
    </body>
  );
}