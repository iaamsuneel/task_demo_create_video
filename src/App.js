import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
