import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contect from './pages/Contect';
import Header from './components/Header/Header';
import Mathura from './pages/Mathura';
import Photo from "./pages/Photo";

function App() {
  return (  
    <Router>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contect" element={<Contect/>}/>
    <Route path="/mathura" element={<Mathura/>}/>
    <Route path="/photo" element={<Photo/>}/>

    
    </Routes>
    </Router>
    
  );
}

export default App;
