import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";
import Welcome from "../components/Welcome";
import AllProducts from "../components/AllProducts";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showFirmTitle, setShowFirmTitle] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setShowLogOut(true);
      // setShowWelcome(true);
    }
  }, []);

  useEffect(() => {
    const firmName = localStorage.getItem("firmName");
    if (firmName) {
      setShowFirmTitle(false);
      // setShowWelcome(true);
    }
  }, []);

  const logOutHandler = () => {
    confirm("Are you sure to logout?");
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false);
    setShowFirmTitle(true);
    setShowWelcome(false);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };
  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };

  const showFirmHandler = () => {
    if (showLogOut) {
      setShowFirm(true);
      setShowLogin(false);
      setShowRegister(false);
      setShowProduct(false);
      setShowWelcome(false);
      setShowAllProducts(false);
    } else {
      alert("Please Login");
      setShowLogin(true);
    }
  };

  const showProductHandler = () => {
    if (showLogOut) {
      setShowProduct(true);
      setShowRegister(false);
      setShowLogin(false);
      setShowFirm(false);
      setShowWelcome(false);
      setShowAllProducts(false);
    } else {
      alert("Please Login");
      setShowLogin(true);
    }
  };
  const showWelcomeHandler = () => {
    setShowProduct(false);
    setShowRegister(false);
    setShowLogin(false);
    setShowFirm(false);
    setShowWelcome(true);
    setShowAllProducts(false);
  };
  const showAllProductsHandler = () => {
    if (showLogOut) {
      setShowProduct(false);
      setShowRegister(false);
      setShowLogin(false);
      setShowFirm(false);
      setShowWelcome(false);
      setShowAllProducts(true);
    } else {
      alert("Please Login");
      setShowLogin(true);
    }
  };

  return (
    <>
      <section className="landingSection">
        <Navbar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
          showLogOut={showLogOut}
          logOutHandler={logOutHandler}
        />
        <div className="collectionSection">
          <SideBar
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAllProductsHandler={showAllProductsHandler}
            showFirmTitle={showFirmTitle}
          />
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
          {showRegister && <Register showLoginHandler={showLoginHandler} />}
          {showFirm && showLogOut && <AddFirm />}
          {showProduct && showLogOut && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut && <AllProducts />}
          {/* <AllProducts /> */}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
