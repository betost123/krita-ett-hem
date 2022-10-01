import * as React from "react";
import styled from "styled-components";
import { TypographyProps } from "../../utils/models";
import { MediaQuery } from "../../utils/styling-helprs";

const TypographyStyle = styled.h1<{ color?: string; textAlign?: string }>`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.color ?? "black"};
  text-align: ${(props) => props.textAlign ?? "left"};

  ${MediaQuery.TABLET} {
    font-size: 18px;
  }
`;

const H4: React.FunctionComponent<TypographyProps> = ({
  color,
  textAlign,
  children,
}) => (
  <TypographyStyle color={color} textAlign={textAlign}>
    {children}
  </TypographyStyle>
);

export default H4;
