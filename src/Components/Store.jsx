import '../App.css';
import '../index.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const url = "http://localhost:3000/";

const getProducts = () => {
  fetch(url + "products", {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify()
  })
  .then(resp => resp.json())
  .then(json => {
    json.forEach(Product => {
      viewProduct(Product);
    })
  })
}

const viewProduct = (product) => {
  console.log(product.image)
  const cardLoc = document.getElementById("product-list");

  const card = document.createElement("div");
  card.setAttribute("class", "product-card");

  const name = document.createElement('p');
  name.innerHTML = product.name;

  const price = document.createElement('h1');
  price.innerHTML = "$" + product.price;

  const img = document.createElement('img');
  img.src = product.image;
  img.setAttribute("class", "product-avatar");

  const desc = document.createElement('h2');
  desc.innerHTML = product.description;

  const btn = document.createElement("button");
  btn.innerHTML = "Buy on Amazon";
  btn.setAttribute("class", "add-to-cart");

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(desc);
  card.appendChild(price);
  card.appendChild(btn);

  cardLoc.appendChild(card);
}

export default function Store() {
  return (
    <div className = {"body"}>
        <Header />
        <div id="product-list">
        <script>{getProducts()}</script>
        </div>
        <Footer />
    </div>
  );
}

