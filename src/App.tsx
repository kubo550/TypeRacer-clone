import React from "react";
import { Info, Navbar, Race } from "./components";
import { BorderedDiv } from "./components/Race/Race";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 2px;
`;

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
          <div className='col-md-4 text-center'>
            <img
              style={{ width: "100%" }}
              src='https://cdn.pixabay.com/photo/2016/01/13/16/29/typewriter-1138293_960_720.png'
              alt='Maszyna do pisania'
            />
            {/* wiadaomo co */}
            <BorderedDiv borderColor='#388BFC'>
              <h4>Your Stats</h4>
              <Grid>
                <div>
                  Avg last 10 WPM:
                  <div>
                    <b> 48.7 </b>
                  </div>
                </div>
                <div>
                  Avg All WPM:
                  <div>
                    <b>40.5</b>
                  </div>
                </div>
                <div>
                  Last WPM:
                  <div>
                    <b>52.3</b>
                  </div>
                </div>
                <div>
                  Best WPM:
                  <div>
                    <b>52.3</b>
                  </div>
                </div>
              </Grid>
            </BorderedDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
