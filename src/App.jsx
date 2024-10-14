import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
     <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  
  );
}

export default App;
