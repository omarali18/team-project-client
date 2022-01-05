import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Shared/Footer/Footer";
import Wishlisht from "./pages/Wishlisht/Wishlisht";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login/Login";

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
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
