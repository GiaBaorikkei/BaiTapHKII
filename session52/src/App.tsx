import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Element from "./components/hw3/Service";
import Contact1 from "./components/hw3/Contact";
import About1 from "./components/hw3/About";
import Index from "./components/hw3/Index";
import Service from "./components/hw3/Service";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/About" element={<About1 />} />
        <Route path="/Contact" element={<Contact1 />} />
        <Route path="/Element" element={<Element />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/Sevice" element={<Service />} />
      </Routes>
    </div>
  );
}
