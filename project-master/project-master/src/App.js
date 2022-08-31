// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Form from "./components/Form";
import About from "./components/About";
import Footer from "./components/Footer";
import Second from "./components/Second";
import Third from "./components/Third";
import { useState } from "react";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Second />
      <Third />
      <Shop />
      <About />
      <Footer />
    </div>
  );
}

export default App;
