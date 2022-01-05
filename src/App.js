import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Shared/Footer/Footer";
import Purches from "./pages/Privet/Purches/Purches";
import Wishlisht from "./pages/Wishlisht/Wishlisht";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlisht />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
