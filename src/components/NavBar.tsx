import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { MediaQuery } from "../utils/styling-helprs";
import { SlideinFromLeft } from "./animations/SlideInFromLeft";
import IconButton from "./IconButton";
import ButtonText from "./Typography/ButtonText";
import H4 from "./Typography/H4";

const NavBarContainer = styled.div`
  height: 40px;
  width: 90%;
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MediaQuery.TABLET} {
    justify-content: space-around;
  }
`;

const VerticalSpacer = styled.div`
  width: 2rem;
`;

const NavLinkItem = styled(Link)`
  text-decoration: none;
  opacity: 0.6;
`;

const NavLinkSection = styled.div`
  display: flex;

  ${MediaQuery.MOBILE} {
    display: none;
  }
`;

const NavBar: React.FunctionComponent = () => {
  const onClickNavLink = () => console.log("go here");

  return (
    <NavBarContainer>
      <SlideinFromLeft>
        <NavLinkSection>
          <VerticalSpacer />
          <NavLinkItem to='shop' activeStyle={{ opacity: 1 }}>
            <ButtonText>Shop</ButtonText>
          </NavLinkItem>
          <VerticalSpacer />
          <NavLinkItem to='ideas' activeStyle={{ opacity: 1 }}>
            <ButtonText>Ideas</ButtonText>
          </NavLinkItem>
          <VerticalSpacer />
          <NavLinkItem to='about' activeStyle={{ opacity: 1 }}>
            <ButtonText>About</ButtonText>
          </NavLinkItem>
        </NavLinkSection>
      </SlideinFromLeft>
      <H4>Krita ett hem</H4>
      <IconButton icon={<ShoppingCartIcon />} />
    </NavBarContainer>
  );
};

export default NavBar;
