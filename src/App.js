import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      </Router>
      {/* <Home/> */}
     <h1>this is team prohect</h1>
     <h2>omar ali</h2>
    </div>
  );
}

export default App;
