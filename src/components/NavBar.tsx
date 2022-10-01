import * as React from "react";
import styled from "styled-components";
import { LogoIconBig } from "../icons/logo";
import H4 from "./Typography/H4";

const NavBarContainer = styled.div`
  height: 90px;
  width: 100vw;
  background-image: linear-gradient(#00000055, white);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

const VerticalSpacer = styled.div`
  width: 1rem;
`;

const NavBar: React.FunctionComponent = () => {
  const onClickNavLink = () => console.log("go here");

  return (
    <NavBarContainer>
      <LogoIconBig />
      <VerticalSpacer />
      <H4>Krita ett hem</H4>
    </NavBarContainer>
  );
};

export default NavBar;
