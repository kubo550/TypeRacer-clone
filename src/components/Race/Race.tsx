import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainInput from "./MainInput/MainInput";
import Player from "./Player/Player";
import SingleWord from "./SingleWord/SingleWord";
import Timmer from "./Timmer/Timmer";

const BorderedDiv = styled.div`
  margin-top: 20px;
  background-color: #0d1117;
  border: 1px solid #6e40c9;
  border-radius: 5px;
  padding: 20px;
`;

const TextContainer = styled.p`
  font-size: 1.32rem;
`;
const TEXT = "potem dal mi pan i daje tak wielkie zaufanie do kaplanow.";

const getPlayableArray = (text: string) =>
  text.split(/\s/).map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));

export type correctWorsType = number[];

enum gameStateEnum {
  init = "The race is about to start!",
  play = "Go!",
  end = "The race has ended.",
}

const Race = () => {
  const [textArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [gameState, setGameState] = useState(gameStateEnum.play);
  const [correctWords, setCorrectWords] = useState<correctWorsType>([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (index / textArray.length === 1) {
      setGameState(gameStateEnum.end);
    }
  }, [index, textArray]);

  useEffect(() => {
    setInterval(() => setTime(prev => prev + 1), 1000);
  }, []);

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
          active={gameState === gameStateEnum.play}
        />
      </BorderedDiv>
    </div>
  );
};

export default Race;
