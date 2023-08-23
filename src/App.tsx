import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/Header";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes.jsx";
import Homepage from "./pages/homepage";
import Register from "./pages/register/index";

function App() {
  const [night, setNight] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={night ? "night-mode" : ""}>
      <Router>
        <Header
          night={night}
          setNight={setNight}
          scrollToContact={scrollToContact}
        />
          <Routes>
          <Route exact path="/" element={<Homepage night={night}
        setNight={setNight}
        contactRef={contactRef}  />} />
      <Route path="/signup" element={<Register />} />
          </Routes>
     
        <Footer />
      </Router>
      {/* <Register /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
