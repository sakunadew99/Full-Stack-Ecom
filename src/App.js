import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from './Pages/LoginSignUp';
import Home from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Card from './Pages/Card';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
