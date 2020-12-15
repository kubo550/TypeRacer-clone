import React from "react";
import { Info, Navbar, Race } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container mt-4' style={{ color: "#C9D1D9" }}>
        <div className='row'>
          <div className='col-md-8'>
            <Info />
            <Race />
          </div>
          <div className='col-md-4'>
            <h2>Assets</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
