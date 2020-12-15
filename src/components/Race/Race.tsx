import React, { useState } from "react";
import styled from "styled-components";
import Player from "./Player/Player";
import SingleWord from "./SingleWord/SingleWord";

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
  "Potem dał mi Pan i daje tak wielkie zaufanie do kapłanów, którzy żyją według zasad świętego Kościoła Rzymskiego ze względu na ich godność kapłańską, że chociaż prześladowaliby mnie, chcę się do nich zwracać.";

const getPlayableArray = (text: string) =>
  text.split(/\s/).map((word, i, arr) => (i === arr.length - 1 ? word : word + " "));

export type correctWorsType = number[];

const Race = () => {
  // const [playable] = useState(true);
  const [textArray] = useState(getPlayableArray(TEXT));
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [message] = useState("The race is about to start!");
  const [correctWords, setCorrectWords] = useState<correctWorsType>([]);

  const nextIndex = () => setIndex(prev => prev + 1);

  return (
    <div>
      <h5>{message}</h5>
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
        {/* Create Component for It */}
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
              setCorrectWords(prev => [...prev, index]);
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
