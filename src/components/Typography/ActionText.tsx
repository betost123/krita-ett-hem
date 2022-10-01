import * as React from "react";
import styled from "styled-components";
import { TypographyProps } from "../../utils/models";
import { MediaQuery } from "../../utils/styling-helprs";

const TypographyStyle = styled.h1<{ color?: string; textAlign?: string }>`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.color ?? "black"};
  text-align: ${(props) => props.textAlign ?? "left"};

  ${MediaQuery.TABLET} {
    font-size: 10px;
  }
`;

const ActionText: React.FunctionComponent<TypographyProps> = ({
  color,
  textAlign,
  children,
}) => (
  <TypographyStyle color={color} textAlign={textAlign}>
    {children}
  </TypographyStyle>
);

export default ActionText;
