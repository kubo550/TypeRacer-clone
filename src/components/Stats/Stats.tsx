import { FC } from "react";
import styled from "styled-components";
import { BorderedDiv } from "../Race/layout";
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
  // todo: contiunnee
  const [best, last, avg, avgLast10] = countStats(wordsPerMinute);

  return (
    <BorderedDiv className='mt-5 mb-4' borderColor='#388BFC'>
      <h4>Your Stats</h4>
      <Grid>
        <div className='my-1'>
          Avg last 10 WPM:
          <div>
            <b> {avgLast10.toFixed(1)} </b>
          </div>
        </div>
        <div className='my-1'>
          Avg All WPM:
          <div>
            <b>{avg.toFixed(1)}</b>
          </div>
        </div>
        <div className='my-1'>
          Last WPM:
          <div>
            <b> {last.toFixed(1)} </b>
          </div>
        </div>
        <div className='my-1'>
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
