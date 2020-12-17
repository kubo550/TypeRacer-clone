import styled from "styled-components";
import { BorderedDiv } from "../Race";
interface EndRaceProps {
  restartGame: (text: string) => void;
  currentText: string;
  nextText: string;
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EndRaceInfo: React.FC<EndRaceProps> = ({ restartGame, currentText, nextText }) => {
  return (
    <BorderedDiv borderColor='#f0883e' className='mb-4'>
      <h4 className='h3 mb-4'>
        Cytowany Fragment: <span className='ml-3'>Pismo Święte </span>
      </h4>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://hurtownianotus.pl/wp-content/uploads/2017/10/czerw.png'
            width='140'
            className='img ml-5'
            alt='cytowany fragment img'
          />
        </div>
        <div className='col-md-6'>
          <ButtonsContainer className='mt-2 mb-4'>
            <button
              className='btn btn-outline-pourple'
              onClick={() => restartGame(currentText)}
            >
              Try Again 🔙
            </button>
            <button
              className='btn btn-outline-orange'
              onClick={() => restartGame(nextText)}
            >
              Next Race 🚓
            </button>
          </ButtonsContainer>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis ipsa
            distinctio earum vel! Minima nostrum dicta.
          </p>
          <p>
            Dowiedz się więcej <a href='#!'>tutaj</a>.
          </p>
        </div>
      </div>
    </BorderedDiv>
  );
};

export default EndRaceInfo;
