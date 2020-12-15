import React, { FC } from "react";
import SingleLetter from "./SingleLetter/SingleLetter";
interface singleWordProps {
  word: string;
  currentWord: string;
  inputValue: string;
  correctWords: number[];
  index: number;
  isCurrent: boolean;
}

const SingleWord: FC<singleWordProps> = ({
  word,
  currentWord,
  inputValue,
  correctWords,
  index,
  isCurrent,
}) => (
  <span
    className={
      isCurrent ? "active" : correctWords.every(num => num < index) ? "" : "past-correct"
    }
  >
    {word.split("").map((singleLetter, i) => (
      <SingleLetter
        key={i}
        singleLetter={singleLetter}
        currentLetter={[...inputValue][i]}
        currentWord={currentWord}
      />
    ))}
  </span>
);

export default SingleWord;
