import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard/index";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Product from "./components/Product";
import Profile from "./components/Profile";
import SalesReport from "./components/SalesReport";
import Sidebar from "./components/Sidebar";
import MainBoard from "./components/Dashboard/mainboard";
import SignOut from "./components/signOut";
import ErrorPage from "./components/Error";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary1">
      <div className="container bg-primary1 flex mx-auto min-h-screen">
        <div
          className={`absolute top-0 transition-all duration-200 ${
             isOpen ? "left-[0%]" : "left-[-100%]"
          } md:static`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <Routes>
          <Route path="/" element={<MainBoard  toggleSidebar={toggleSidebar}/>}>
           <Route path="/" index element={<Dashboard />} />
           <Route path="profile"  element={<Profile />} />
           <Route path="order"  element={<Order />} />
           <Route path="product"  element={<Product />} />
           <Route path="salesReport"  element={<SalesReport />} />
           <Route path="signout"  element={<SignOut />} />
           <Route path="*"  element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

