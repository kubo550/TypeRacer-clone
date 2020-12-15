import React, { FC } from "react";
interface singleLetterProps {
  currentLetter: string;
  singleLetter: string;
  currentWord: string;
}
const SingleLetter: FC<singleLetterProps> = ({
  currentLetter,
  singleLetter,
  currentWord,
}) => {
  return (
    <span
      className={
        currentLetter === singleLetter && currentWord.includes(currentLetter)
          ? "correct"
          : currentLetter && currentLetter !== singleLetter
          ? "wrong"
          : ""
      }
    >
      {singleLetter}
    </span>
  );
};

export default SingleLetter;
