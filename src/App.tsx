import "./App.css";
import {useState} from 'react'

import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/Header";
import Homepage from './pages/homepage/index.tsx'

function App() {
  const[night, setNight] = useState(false)
  return (
    <div className={night ? "night-mode" : ""}>
      <Header night={night} setNight={setNight} />
      <Homepage night={night} setNight={setNight} />
      <Footer />
    </div>
  );
}

export default App;
