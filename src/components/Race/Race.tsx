import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Player from "./Player/Player";
import SingleWord from "./SingleWord/SingleWord";

const Road = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  padding-right: 40px;
  ::after {
    content: "";
    position: absolute;
    width: 46px;
    right: 15px;
    height: 4px;
    background-color: #6e40c9;
  }
`;
const BorderedDiv = styled.div`
  margin-top: 20px;
  background-color: #0d1117;
  border: 1px solid #6e40c9;
  border-radius: 5px;
  padding: 20px;
`;
const TEXT = "Ja to, proszę pana, mam bardzo dobre mam połączenie.";
//  Wstaję rano za piętnaście trzecia. Latem to już widno. Za piętnaście trzecia jestem ogolony, bo golę się wieczorem. Śniadanie jadam na kolację. Tylko wstaję i wychodzę.";
const getPlayableArray = (text: string) =>
  text.split(/\s/).map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));

export type correctWorsType = string[];

const Race = () => {
  // const [playable] = useState(true);
  const [textArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [message] = useState("The race is about to start!");
  const [correctWords, setCorrectWords] = useState<correctWorsType>([]);

  console.log(correctWords);

  const nextIndex = () => setIndex(prev => prev + 1);

  return (
    <div>
      <h5>{message}</h5>
      <Player distance={(index / textArray.length) * 100} />
      <Road />
      <BorderedDiv>
        <p style={{ textAlign: "justify", fontSize: "1.22rem", wordSpacing: "2px" }}>
          {textArray.map((word, i) => {
            return (
              <SingleWord
                key={i}
                word={word}
                currentWord={textArray[index]}
                inputValue={inputValue}
                correctWords={correctWords}
              />
            );
          })}
        </p>
        {/* Create Component for it */}
        <input
          type='text'
          style={{ width: "100%", marginTop: "10px", fontSize: "1.15rem" }}
          placeholder='Type the above text here when the race begins'
          autoFocus
          value={inputValue}
          onChange={({ target }) => {
            if (target.value === textArray[index]) {
              nextIndex();
              setInputValue("");
              correctWords.push(textArray[index]);
            } else {
              setInputValue(target.value);
            }
          }}
        />
      </BorderedDiv>
    </div>
  );
};

export default Race;
