import React from "react";

// todo wiadomo co
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Race from "./components/Race/Race";

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
