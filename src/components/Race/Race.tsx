import React, { useState, useEffect, FC, useRef } from "react";
import { MainInput, Player, SingleWord, Timmer, EndRaceInfo } from "./";
import { getPlayableArray } from "../../helper";
import { CorrectWorsType, RaceProps, GameStateEnum } from "./types";
import { BorderedDiv, TextContainer } from "./layout";

const TEXT1 = "nie bedziesz spisywal pokolenia lewiego wedlug liczby.";
const TEXT =
  "Potem do położnych u kobiet hebrajskich, z których jedna nazywała się Szifra, a druga Pua, powiedział król egipski te słowa : Jeśli będziecie przy porodach kobiet hebrajskich, to patrzcie na płeć.";
const DELAY = 3;

const Race: FC<RaceProps> = ({ addToAVG }) => {
  const [textArray, setTextArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [gameState, setGameState] = useState(GameStateEnum.init);
  const [correctWords, setCorrectWords] = useState<CorrectWorsType>([]);
  const [time, setTime] = useState(DELAY * -1);
  const [increment, setIncrement] = useState<1 | 0>(1);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + increment);
      inputRef.current.focus();
    }, 1000);
    return () => clearInterval(interval);
  }, [increment]);

  useEffect(() => {
    setTimeout(() => setGameState(GameStateEnum.play), DELAY * 1000);
  }, [textArray]);

  useEffect(() => {
    if (index / textArray.length === 1) {
      setGameState(GameStateEnum.end);
      const chars = [...textArray].map(word => [...word]).flat();
      const AVGLettersInWord = 5;
      const WPM = ((chars.length / time) * 60) / AVGLettersInWord;
      addToAVG(WPM);
      setIncrement(0);
    }
  }, [index, textArray, addToAVG, setIncrement, time]);

  const addToCorrectWords = (index: number) => {
    setIndex(prev => prev + 1);
    setCorrectWords(prev => [...prev, index]);
  };

  const restartGame = (text: string) => {
    setIndex(0);
    setTime(DELAY * -1);
    setIncrement(1);
    setInputValue("");
    setGameState(GameStateEnum.init);
    setCorrectWords([]);
    setTextArray(getPlayableArray(text));
  };

  return (
    <>
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
          inputRef={inputRef}
          inputValue={inputValue}
          currentWord={textArray[index]}
          add={() => addToCorrectWords(index)}
          setInputValue={(val: string) => setInputValue(val)}
          active={gameState === GameStateEnum.play}
        />
      </BorderedDiv>
      {gameState === GameStateEnum.end && (
        <EndRaceInfo restartGame={restartGame} currentText={TEXT} nextText={TEXT1} />
      )}
    </>
  );
};

export default Race;
