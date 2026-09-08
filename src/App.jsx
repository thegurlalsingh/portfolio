import React from 'react';
import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen text-on-surface flex flex-col justify-center items-center p-8 gap-8 relative select-none">

      <MatrixBackground />
      <CustomCursor />
      <Navbar />


      <Hero />
    </div>
  );
}

export default App;
