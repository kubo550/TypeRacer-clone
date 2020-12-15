import React, { FC } from "react";
import styled from "styled-components";

interface mainInputProps {
  inputValue: string;
  currentWord: string;
  active: boolean;
  isError?: boolean;

  add: () => void;
  setInputValue: (val: string) => void;
}

const StyledInput = styled.input<{ isError?: boolean }>`
  width: 100%;
  margin-top: 10px;
  font-size: 1.15rem;
  /*                                                   !red  */
  background-color: ${({ isError }) => (isError ? "#f0a3a3" : "")};
`;

const MainInput: FC<mainInputProps> = ({
  inputValue,
  currentWord,
  add,
  setInputValue,
  active,
}) => {
  return (
    <StyledInput
      type='text'
      placeholder='Type the above text here when the race begins'
      value={inputValue}
      autoFocus
      disabled={false}
      onChange={({ target }) => {
        if (target.value === currentWord) {
          setInputValue("");
          add();
        } else {
          setInputValue(target.value);
        }
      }}
    />
  );
};

export default MainInput;
