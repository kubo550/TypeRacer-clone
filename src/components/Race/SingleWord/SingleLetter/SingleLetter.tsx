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
  const getClassName = () => {
    if (currentLetter === singleLetter && currentWord.includes(currentLetter)) {
      // console.log("nie ma błedu");
      return "correct";
    } else if (currentLetter && currentLetter !== singleLetter) {
      // console.log("jest blad");

      return "wrong";
    }
  };
  return <span className={getClassName()}>{singleLetter}</span>;
};

export default SingleLetter;
