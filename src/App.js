import React from "react";
import "./App.css";

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

// CONTEXT
import { ItemsProvider } from "./context/ItemsContext";

// VIEWS
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import ChinpokomonDetail from "./pages/ChinpokomonDetail/ChinpokomonDetail";
import Types from "./pages/Types/Types";


const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/details/:id" element={<ChinpokomonDetail />} />
            <Route path="/type/:id" element={<Types />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;