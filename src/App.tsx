import "./App.css";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/Header";
import Homepage from './pages/homepage/index.tsx'

function App() {
  return (
    <div className="">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
