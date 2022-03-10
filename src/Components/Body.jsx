import '../App.css';
import '../index.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import bambooImg from '../Assets/bamboo.png';
import hempImg from '../Assets/hemp.png';
import glassImg from '../Assets/glass.png';
import beeswaxImg from '../Assets/beeswax.png';

export default function Body() {
  return (
    <div className = {"body"}>
        <Header />

      <div className="body-home-table">
        <div className="table-text">
          <h1>What Makes a Material Sustainable?</h1>
          <p>Sustainable materials are materials used throughout our consumer and industrial economy 
            that can be produced in required volumes without depleting non-renewable resources 
            and without disrupting the established steady-state equilibrium of the environment and 
            key natural resource systems.</p>
          <h1>some examples of Sustainable materials are:</h1>
          <p>bamboo, hemp, wool, linen, straw, clay, stone, 
            sand, beeswax, glass, organic cotton, soybean fabric, 
            cork, brick, and coconut.</p>  
        </div>
      </div>
      <div className="body-home-table" style={{flexDirection: "row"}}>
        <div className="table-text">
          <h1>BAMBOO</h1>
          <p>
           can be a very sustainable crop: a fast-growing grass, it requires no fertiliser and self-regenerates from its own roots, 
           so it doesn't need to be replanted. When compared to cotton cultivation, which requires large amounts of water, pesticides, 
           and labour, the advantages are pretty clear. Bamboo is often labeled 'the world's most renewable material and is the fastest-growing woody plant in the world. 
           It can grow up to four feet in one day, no joke. The panda's kryptonite absorbs five times more carbon dioxide and produces 35% more oxygen than a similar group of trees.
          </p>
        </div>
        <div className="table-images">
          <img className="home-images" src={bambooImg}></img>

          <button className="table-button">Bamboo Products</button>
        </div>
      </div>
      <div className="body-home-table" style={{flexDirection: "row-reverse"}}> 
        <div className="table-text">
          <h1>HEMP</h1>
          <p>
          a natural plant fiber from the stems of the Cannabis plant. 
          In terms of sustainability, hemp is the least harmful to the environment. 
          The hemp crop requires little water to grow and replenishes soil nutrients to help improve soil health. 
          It is also biodegradable and is one of the stronger textile fabrics.
          </p>
        </div>
        <div className="table-images">
          <img className="home-images" src={hempImg} style={{float: "left"}}></img>

          <button className="table-button">Hemp Products</button>
        </div> 
      </div>
      <div className="body-home-table" style={{flexDirection: "row"}}> 
        <div className="table-text">
          <h1>GLASS</h1>
          <p>
          From abundant natural raw materials, such as sand, creating glass does not require disturbing the natural 
          environment or causing negative feedback. Because of its fully recyclable quality, glass is a sustainable 
          choice that is able to close the consumption loop. 
          </p>
        </div>
        <div className="table-images">
          <img className="home-images" src={glassImg}></img>

          <button className="table-button">Glass Products</button>
        </div> 
      </div>
      <div className="body-home-table" style={{flexDirection: "row-reverse"}}> 
        <div className="table-text">
          <h1>BEESWAX</h1>
          <p>
          a natural, renewable product. This means it is a sustainable alternative to synthetic, mineral oil-based 
          waxes and other products. Beeswax is a by-product of honey production. Bees produce excess honey in wax honeycombs 
          which can be taken by beekeepers without affecting the colony. 
          However Beeswax may not be sustainable or ethical, depending on how the beeswax is harvested. 
          Many, especially vegans, do not consider the harvesting of beeswax to be truly cruelty-free, since it technically is an animal byproduct.
          </p>
        </div>
        <div className="table-images">
          <img className="home-images" src={beeswaxImg}></img>

          <button className="table-button">Glass Products</button>
        </div> 
      </div>
        <Footer />
    </div>
  );
}