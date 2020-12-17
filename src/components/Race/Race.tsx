import React, { useState, useEffect, FC } from "react";
import { MainInput, Player, SingleWord, Timmer } from "./";
import styled from "styled-components";

import { getPlayableArray } from "../../helper";
export const BorderedDiv = styled.div<{ borderColor?: string }>`
  margin-top: 20px;
  background-color: #0d1117;
  border: 1px solid ${({ borderColor = "#6e40c9" }) => borderColor};
  border-radius: 5px;
  padding: 20px;
`;

const TextContainer = styled.p`
  font-size: 1.32rem;
`;
const TEXT =
  "Pan bowiem rzekł do Mojżesza tymi słowami: Nie będziesz spisywał pokolenia Lewiego według liczby głów i nie policzysz ich razem z resztą Izraelitów. Powierzysz natomiast lewitom troskę o Przybytek Świadectwa, o wszystkie jego sprzęty i cokolwiek do niego należy; oni będą nosić zarówno Przybytek, jak i wszystkie jego sprzęty, będą mu służyć dokoła.";
//  bagginsowie zyli w okolicy pagorka od niepamietnych czasow i cieszyli sie powszechnym szacunkiem nie tylko dlatego ze prawie wszyscy byli bogaci lecz także dlatego ze nigdy nie miewali przygód i nie sprawiali niespodzianek.";

export type correctWorsType = number[];

enum GameStateEnum {
  init = "The race is about to start!",
  play = "Go!",
  end = "The race has ended.",
}
interface raceProps {
  addToAVG: (wpm: number) => void;
}
const DELAY = 3;

const Race: FC<raceProps> = ({ addToAVG }) => {
  const [textArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [gameState, setGameState] = useState(GameStateEnum.init);
  const [correctWords, setCorrectWords] = useState<correctWorsType>([]);
  const [time, setTime] = useState(DELAY * -1);

  useEffect(() => {
    setTimeout(() => setGameState(GameStateEnum.play), DELAY * 1000);
    const interval = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index / textArray.length === 1) {
      setGameState(GameStateEnum.end);
      const chars = [...textArray].map(word => [...word]).flat();
      const AVGLettersInWord = 5;
      const WPM = ((chars.length / time) * 60) / AVGLettersInWord;
      addToAVG(WPM);
    }
  }, [index, textArray, addToAVG]);

  const addToCorrectWords = (index: number) => {
    setIndex(prev => prev + 1);
    setCorrectWords(prev => [...prev, index]);
  };

  return (
    <div>
      <Timmer time={time} />
      <h5>{gameState}</h5>
      <Player distance={index / textArray.length} />
      <BorderedDiv>
        <TextContainer>
          {textArray.map((word, i) => (
            <SingleWord
              key={i}
              index={i}
              isCurrent={index === i}
              word={word}
              currentWord={textArray[index]}
              inputValue={inputValue}
              correctWords={correctWords}
            />
          ))}
        </TextContainer>
        <MainInput
          inputValue={inputValue}
          currentWord={textArray[index]}
          add={() => addToCorrectWords(index)}
          setInputValue={(val: string) => setInputValue(val)}
          active={gameState === GameStateEnum.play}
        />
      </BorderedDiv>
    </div>
  );
};

export default Race;
