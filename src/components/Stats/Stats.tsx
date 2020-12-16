import { FC } from "react";
import styled from "styled-components";
import { BorderedDiv } from "../Race/Race";
import { countStats } from "../../helper";

const Grid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 2px;
`;

interface statsProps {
  wordsPerMinute: number[];
}

const Stats: FC<statsProps> = ({ wordsPerMinute }) => {
  const [best, last, avg, avgLast10] = countStats(wordsPerMinute);

  return (
    <BorderedDiv borderColor='#388BFC'>
      <h4>Your Stats</h4>
      <Grid>
        <div>
          Avg last 10 WPM:
          <div>
            <b> {avgLast10.toFixed(1)} </b>
          </div>
        </div>
        <div>
          Avg All WPM:
          <div>
            <b>{avg.toFixed(1)}</b>
          </div>
        </div>
        <div>
          Last WPM:
          <div>
            <b> {last.toFixed(1)} </b>
          </div>
        </div>
        <div>
          Best WPM:
          <div>
            <b>{best.toFixed(1)}</b>
          </div>
        </div>
      </Grid>
    </BorderedDiv>
  );
};

export default Stats;
