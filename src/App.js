import React from 'react';
import './App.css';
import Navbar from './components/Navbar' ;
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom' ;
import HeroSection from './components/HeroSection';
import Cards from './components/Cards' ;
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
      <Routes>
       <Route path ='/' exact  />
      </Routes>
    </Router>
    </>
     
  
  );
}

export default App;
