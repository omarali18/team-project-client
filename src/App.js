import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Shared/Footer/Footer";
import Purches from "./pages/Privet/Purches/Purches";
import Wishlisht from "./pages/Wishlisht/Wishlisht";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlisht />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
