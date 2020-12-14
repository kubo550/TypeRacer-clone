import React, { FC } from "react";
import { NavbarContainer, StyledUl, StyledA } from "./NavbarStyled";
type navLinkType = "race" | "pit stop" | "chat" | "about";
const navLinks: navLinkType[] = ["race", "pit stop", "chat", "about"];

const Navbar: FC = () => (
  <NavbarContainer>
    <h3> ⌨ typeracer </h3>
    <StyledUl>
      {navLinks.map((link: navLinkType) => (
        <li key={link}>
          <StyledA href='#!'> {link} </StyledA>
        </li>
      ))}
    </StyledUl>
  </NavbarContainer>
);

export default Navbar;
