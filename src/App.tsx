import "./App.css";
import { useState } from "react";

import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/Header";
import Homepage from "./pages/homepage/index.tsx";
import { useRef } from 'react';

function App() {
  const [night, setNight] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={night ? "night-mode" : ""}>
      <Header
        night={night}
        setNight={setNight}
        scrollToContact={scrollToContact}
      />
      <Homepage
        night={night}
        setNight={setNight}
        contactRef={contactRef} 
      />
      <Footer />
    </div>
  );
}

export default App;
