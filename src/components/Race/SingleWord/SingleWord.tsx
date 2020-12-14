import React, { FC } from "react";

interface singleWordProps {
  word: string;
  currentWord: string;
  inputValue: string;
  correctWords: string[];
}

const SingleWord: FC<singleWordProps> = ({
  word,
  currentWord,
  inputValue,
  correctWords,
}) => {
  return (
    <span className={word === currentWord ? "active" : ""}>
      {word.split("").map((letter, i) => {
        type singleWord = string;
        const current: singleWord = [...inputValue][i];

        return (
          <span
            key={i}
            className={
              current === letter && currentWord.includes(current) ? "correct" : ""
            }
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default SingleWord;
