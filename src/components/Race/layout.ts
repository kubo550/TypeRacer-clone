import styled from "styled-components"
export const BorderedDiv = styled.div<{ borderColor?: string }>`
  margin-top: 20px;
  background-color: #0d1117;
  border: 1px solid ${({ borderColor = "#6e40c9" }) => borderColor};
  border-radius: 5px;
  padding: 20px;
`;

export const TextContainer = styled.p`
  font-size: 1.32rem;
`;

// * EndRaceInfo
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;