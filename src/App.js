import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
