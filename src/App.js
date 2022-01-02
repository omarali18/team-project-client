import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
