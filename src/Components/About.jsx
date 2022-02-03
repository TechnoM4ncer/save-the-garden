import '../App.css';
import '../index.css';
import susearth from '../Assets/susearth.png';
import Header from './Header.jsx';

export default function About() {
  return (
    <body className = {"body"}>
        <Header />

        <img src = {susearth} width = "80%" height = "80%" />

        <div className="bodyText">

          <h1>What is Sustainability?</h1>
          <hr class = "class-1"/>

          <p>Sustainability is the balance between the environment, equity and economy.</p>
          <p>It's the integration of environmental health, social equity and economic vitality in order to create thriving, healthy, diverse and resilient communities for this generation and generations to come. The practice of sustainability recognizes how these issues are interconnected and requires a systems approach and an acknowledgement of complexity.</p>
          <p>Sustainability as a concept recognizes that the environment is an exhaustible resource. Therefore, it is important to use the environment and its resources rationally and protect it for the good of the Earth, our environment, humanity, and all living things.</p>

          <hr class = "class-1"/>
          <h1>Why You Should Care About Being Sustainable!</h1>
          <hr class = "class-1"/>
          <p>Being sustainable makes sense!</p>
          <p>It can save you money, improve health, and increase safety. Being committed to sustainability will reduce your carbon footprint and the amount of toxins released into the environment, making it safe. When we focus on sustainability, the entire world benefits and gets to live in clean, more healthy living conditions.</p>
          <hr class = "class-1"/>

        </div>
    </body>
  );
}