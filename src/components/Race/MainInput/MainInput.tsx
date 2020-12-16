import React, { FC } from "react";
import styled from "styled-components";

interface mainInputProps {
  inputValue: string;
  currentWord: string;
  active: boolean;
  add: () => void;
  setInputValue: (val: string) => void;
}

const StyledInput = styled.input<{ active?: boolean }>`
  width: 100%;
  margin-top: 10px;
  font-size: 1.15rem;
  background-color: ${({ active }) => (!active ? "grey" : "white")};
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
      active={active}
      onChange={
        active
          ? ({ target }) => {
              if (target.value === currentWord) {
                setInputValue("");
                add();
              } else {
                setInputValue(target.value);
              }
            }
          : () => {}
      }
    />
  );
};

export default MainInput;
