import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityInfo from "./Components/CityInfo"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    
      <Routes>
      <Route path="/city" element={<CityInfo />} />
      <Route path="/" element={<Home />} />
      </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
