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
const TEXT =
  "I then divided the words by the time in seconds to see how many words per second. Then, I multiplied by 60 to get the number of words that it would be in one minute. Let me know if this is what you were looking for.";

const getPlayableArray = (text: string) =>
  text.split(/\s/).map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));

export type correctWorsType = number[];

enum gameStateEnum {
  init = "The race is about to start!",
  play = "Go!",
  end = "The race has ended.",
}
const DELAY = 3;

const Race = () => {
  const [textArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [gameState, setGameState] = useState(gameStateEnum.init);
  const [correctWords, setCorrectWords] = useState<correctWorsType>([]);
  const [time, setTime] = useState(DELAY * -1);

  useEffect(() => {
    setTimeout(() => setGameState(gameStateEnum.play), DELAY * 1000);
    setInterval(() => setTime(prev => prev + 1), 1000);
  }, []);

  useEffect(() => {
    if (index / textArray.length === 1) {
      setGameState(gameStateEnum.end);
      console.log(time);
      const chars = [...textArray].map(word => [...word]).flat();
      const AVGLettersInWord = 5;
      const WPM = (((chars.length / time) * 60) / AVGLettersInWord).toFixed(1);
      console.log("Twoje WPM: " + WPM);
    }
  }, [index, textArray]);

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
