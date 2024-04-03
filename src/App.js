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
<<<<<<< HEAD
import Photo from "./pages/Photo";
=======
import PackageHotel from './components/Package/package'
>>>>>>> 40371198768428e021f131acf5472dcda871160c

function App() {
  return (  
    <Router>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contect" element={<Contect/>}/>
    <Route path="/mathura" element={<Mathura/>}/>
<<<<<<< HEAD
    <Route path="/photo" element={<Photo/>}/>
=======
    <Route path='/package'  element={<PackageHotel /> } />
   
>>>>>>> 40371198768428e021f131acf5472dcda871160c

    
    </Routes>
    </Router>
    
  );
}

export default App;
