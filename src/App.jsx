

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Sweets from "./Sweets";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Cart from "./Cart";
import Breakfast from "./Breakfast";
import Snacks from "./Snacks";
import ContactUs from "./ContactUs";
import FastFood from "./FastFood";
import Soups from "./Soups";
import Bakery from "./Bakery";
import Orders from "./Orders";
import Registration from "./Registration";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import OrderDetails from "./OrderDetails";
import ResetPassword from "./ResetPassword";

function AppRoutes() {
  // If you need to protect routes you can use state.login.user
  const { user } = useSelector((state) => state.login);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/veg" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/veg" element={<Veg />} />
      <Route path="/nonveg" element={<Nonveg />} />
      <Route path="/sweets" element={<Sweets />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/fastfood" element={<FastFood />} />
      <Route path="/soups" element={<Soups />} />
      <Route path="/bakery" element={<Bakery />} />
      <Route path="/contactus" element={<ContactUs />} />

      
      {/* 🔐 PROTECTED ROUTES */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
  path="/order/:orderId"
  element={
    <ProtectedRoute>
      <OrderDetails />
    </ProtectedRoute>
  }
/>

      <Route
        path="/profile" // ✅ add Profile route
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />




    <Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />


      {/* If user is logged in, redirect /register and /login to /home */}
      <Route
        path="/register"
        element={!user ? <Registration /> : <Navigate to="/home" replace />}
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/home" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar/>
      <div className="container-fluid mt-4">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

