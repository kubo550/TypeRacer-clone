import React, { useCallback, useState } from "react";
import { Info, Navbar, Race, Stats } from "./components";

const App = () => {
  // Words Per minute Array
  const [WPMs, setWPMs] = useState<number[]>([]);
  const addToAVG = useCallback((wpm: number) => setWPMs(prev => [...prev, wpm]), []);
  return (
    <div>
      <Navbar />
      <div className='container mt-4' style={{ color: "#C9D1D9" }}>
        <div className='row'>
          <div className='col-md-8'>
            <Info />
            <Race addToAVG={addToAVG} />
          </div>
          <div className='col-md-4 text-center'>
            <h5 className='text-right'>Type Racer - Clone</h5>
            <img
              style={{ width: "100%" }}
              src='https://cdn.pixabay.com/photo/2016/01/13/16/29/typewriter-1138293_960_720.png'
              alt='Maszyna do pisania'
            />
            <Stats wordsPerMinute={WPMs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
