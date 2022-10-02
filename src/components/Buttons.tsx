import * as React from "react";
import styled from "styled-components";
import ButtonText from "./Typography/ButtonText";
import HoverCursor from "../images/cursors/hover-cursor.svg";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tetriary";
}

const SecondaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-color: white;
  border-width: 1px;
  background-color: rgba(300, 300, 300, 0.3);
  width: 100%;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-width: 0;
  background-color: #b9c0f8;
  width: 100%;
`;

const TetriaryButton = styled.button`
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border-color: #385772;
  border-width: 1px;
  background-color: transparent;
  width: 100%;
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <>
      {variant === "primary" ? (
        <PrimaryButton
          onClick={onClick}
          style={{ cursor: `url(${HoverCursor}), auto` }}
        >
          <ButtonText color='white'>{children}</ButtonText>
        </PrimaryButton>
      ) : variant === "tetriary" ? (
        <TetriaryButton
          onClick={onClick}
          style={{ cursor: `url(${HoverCursor}), auto` }}
        >
          <ButtonText color='#385772'>{children}</ButtonText>
        </TetriaryButton>
      ) : (
        <SecondaryButton
          onClick={onClick}
          style={{ cursor: `url(${HoverCursor}), auto` }}
        >
          <ButtonText color='white'>{children}</ButtonText>
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;
