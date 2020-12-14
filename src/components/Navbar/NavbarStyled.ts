import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #161b22;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #f0f6fc;
`;
export const StyledUl = styled.ul`
  list-style: none;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  text-transform: capitalize;
  font-size: 20px;
`;
export const StyledA = styled.a`
  color: #f0f6fc;
  text-decoration: none;
  transition: color 0.3s;
  :hover {
    cursor: pointer;
    color: #b4bbc2;
    text-decoration: none;

  }
`;
