
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Seyahat from './components/pages/About';
import PlaceDetail from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
//import Place from '../../server/models/place';

function App() {
  return (
    <>
      <Router>
       <Navbar />
        <Routes>
          <Route path='/' exact Component ={Home} />
          <Route path='/:id' element={<PlaceDetail />} />
          <Route path='/seyahat' exact Component ={Seyahat} />
          <Route path='/contact' exact Component ={Contact} />
          <Route path='/about' exact Component ={About} />
        </Routes>
      </Router>
    
      </>
  );
}

export default App;
