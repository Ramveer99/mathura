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
import PackageHotel from './components/Package/package'

function App() {
  return (  
    <Router>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contect" element={<Contect/>}/>
    <Route path="/mathura" element={<Mathura/>}/>
    <Route path='/package'  element={<PackageHotel /> } />
   

    
    </Routes>
    </Router>
    
  );
}

export default App;
