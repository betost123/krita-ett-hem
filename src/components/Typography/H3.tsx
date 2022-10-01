import * as React from "react";
import styled from "styled-components";
import { TypographyProps } from "../../utils/models";
import { MediaQuery } from "../../utils/styling-helprs";

const TypographyStyle = styled.h1<{ color?: string; textAlign?: string }>`
  font-weight: 400;
  font-size: 36px;
  color: ${(props) => props.color ?? "black"};
  text-align: ${(props) => props.textAlign ?? "left"};

  ${MediaQuery.TABLET} {
    font-size: 20px;
  }
`;

const H3: React.FunctionComponent<TypographyProps> = ({
  color,
  textAlign,
  children,
}) => (
  <TypographyStyle color={color} textAlign={textAlign}>
    {children}
  </TypographyStyle>
);

export default H3;
