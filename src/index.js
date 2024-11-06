import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// App.js (React)
function Header() {
  const currentHour = new Date().getHours();
  return (
    <header>
      <h1>PZD's Pizza Co.</h1>
      <h2>Our Menu</h2>
      {currentHour >= 10 && currentHour <= 22 && (
        <p className="tagline">Authentic Italian cuisine, all from our stone oven</p>
      )}
    </header>
  );
}

function Pizza({ image, name, ingredients, price, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="ingredients">{ingredients}</p>
      <p>${price}</p>
      {soldOut && <p className="sold-out-text">Sold Out</p>}
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  return (
    <footer className="footer">
      <p>
        {currentHour >= 10 && currentHour <= 22
          ? "We're currently open"
          : "Sorry, we're closed"}
      </p>
      {currentHour >= 10 && currentHour <= 22 && <button>Order</button>}
    </footer>
  );
}

function Menu() {
  return (
    <div className="menu">
      {pizzaData.map((pizza) => (
        <Pizza
          image={pizza.photoName}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
