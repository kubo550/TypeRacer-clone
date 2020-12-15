import { FC } from "react";
import carImg from "../../../assets/car.svg";
import styled from "styled-components";

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

interface playerProps {
  distance: number;
}

const Player: FC<playerProps> = ({ distance }) => {
  return (
    <>
      <img
        src={carImg}
        width='58'
        height='24'
        alt='player car'
        style={{ marginLeft: `${distance * 100 - 7}%` }}
        title='Powerty'
      />
      <Road />
    </>
  );
};

export default Player;
