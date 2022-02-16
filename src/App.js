import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Reabit from "./pages/Reabit";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/reabit' element = {<Reabit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
