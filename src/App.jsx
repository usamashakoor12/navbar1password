import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Vault from "./components/Vault";
import TestGetData from "./components/TestGetData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} /> 
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/get" element={<TestGetData />} />
      </Routes>
    </Router>
  );
}

export default App;
