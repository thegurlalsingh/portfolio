import React from 'react';
import CustomCursor from './components/CustomCursor';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen text-on-surface flex flex-col justify-center items-center p-8 gap-8 relative select-none">
      {/* Background and Cursor components */}
      <MatrixBackground />
      <CustomCursor />

      {/* Test Interactive Elements */}
      <h1 className="font-display-xl text-5xl uppercase tracking-wider text-center">
        Vibe Test
      </h1>

      <p className="font-body-md text-on-surface-variant max-w-md text-center">
        Hover over the elements below to see the custom cursor scale up (active state). Move your mouse around to repel the falling background particles.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-3 border border-white/20 rounded-xl bg-white/5 font-label-sm text-xs tracking-widest uppercase hover:border-electric-blue hover:text-electric-blue transition-colors">
          Hover Button
        </button>
        <a
          href="#test"
          className="px-6 py-3 border border-white/20 rounded-xl bg-white/5 font-label-sm text-xs tracking-widest uppercase hover:border-lime-green hover:text-lime-green transition-colors"
        >
          Hover Link
        </a>
      </div>

      <div className="flex gap-2">
        <span className="px-4 py-2 border border-white/10 rounded-full font-label-sm text-[10px] uppercase bg-white/5">
          JetBrains Font Test
        </span>
      </div>
    </div>
  );
}

export default App;
