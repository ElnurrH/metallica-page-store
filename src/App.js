import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { MainContext } from "./utils/MainContext";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { AuthContext } from "./utils/AuthContext";
import ResetPwd from "./pages/ResetPwd";
import Otp from "./pages/Otp";
import ChangePwd from "./pages/ChangePwd";

const App = () => {
  return (
    <AuthContext>
      <MainContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPwd />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/change-pwd" element={<ChangePwd />} />
          <Route path="/details/:productID" element={<Details />} />
        </Routes>
        <Footer />
      </MainContext>
    </AuthContext>
  );
};

export default App;
