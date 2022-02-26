import '../App.css';
import '../index.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import leafdrop from '../Assets/leafdrop.png';
import sustree from '../Assets/sustree.png';
import lightbulb from '../Assets/lightbulb.png';

export default function About() {
  return (
    <div className = {"body"}>
        <Header />

        <div className="body-text">

          <h1>What is Sustainability?</h1>
          <hr className = "class-1"/>

          <p>Sustainability is the balance between the environment, equity and economy.</p>
          <p>It's the integration of environmental health, social equity and economic vitality in order to create thriving, healthy, diverse and resilient communities for this generation and generations to come. The practice of sustainability recognizes how these issues are interconnected and requires a systems approach and an acknowledgement of complexity.</p>
          <p>Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, and all living things.</p>

          <img src = {sustree} alt = "" width = '200px' height = '200px'/>

          <hr className = "class-1"/>
          <h1>Why Should You Care About Being Sustainable?</h1>
          <hr className = "class-1"/>
          <p>Being sustainable makes sense!</p>
          <p>It can save you money, improve health, and increase safety. Being committed to sustainability will reduce your carbon footprint and the amount of toxins released into the environment, making it safe. When we focus on sustainability, the entire world benefits and gets to live in clean, more healthy living conditions.</p>
          <hr className = "class-1"/>

          <img src = {lightbulb}  alt = "" width = '180px' height = '200px'/>

          <h1>Our Mission</h1>
          <hr className = "class-1"/>
          <p>We created an easy way for you to make your everyday life more sustainable. By bringing sustainable and eco friendly brands to one site, to make your shopping experience a breeze!</p>
          <hr className = "class-1"/>
          <img src = {leafdrop} alt = "" width = '150px' height = '150px'/>

        </div>
        <Footer />
    </div>
  );
}