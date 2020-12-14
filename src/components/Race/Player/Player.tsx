import { FC } from "react";
import carImg from "../../../assets/car.svg";

interface playerProps {
  distance: number;
}

const Player: FC<playerProps> = ({ distance }) => {
  return (
    <img
      src={carImg}
      width='58'
      height='24'
      alt='player car'
      style={{ marginLeft: `${distance - 7}%` }}
      title='Powerty'
    />
  );
};

export default Player;
