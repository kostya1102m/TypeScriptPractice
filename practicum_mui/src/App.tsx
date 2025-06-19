import React from 'react';
import logo from './images/logo.svg';
import Navbar from './components/Navbar';
import './styles/App.css';
import Gallery from './components/Gallery';
import Content from './components/Content';
import Footer from './components/Footer';
import LogosGallery from './components/LogosGallery';
function App() {
  return (
    <div>
      <Navbar active="1"/>
      <Gallery/>
      <LogosGallery/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
