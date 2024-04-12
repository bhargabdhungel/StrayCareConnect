import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Toaster />
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}
