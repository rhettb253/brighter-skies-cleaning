// import { useState } from 'react';
import Gallery from './components/Gallery';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div>
      <header>
        <h1>Brighter Skies Cleaning</h1>
        <p>Serving Walla Walla, WA with Residential and Commercial Cleaning</p>
      </header>
      <Gallery />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
