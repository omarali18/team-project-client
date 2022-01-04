<<<<<<< HEAD
import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
=======
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact/Contact';
>>>>>>> 176719bbd52dd7e8e96fc1149b80fd9d0181be85

function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
=======
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      </Routes>
>>>>>>> 176719bbd52dd7e8e96fc1149b80fd9d0181be85
      </Router>
    </div>
  );
}

export default App;
