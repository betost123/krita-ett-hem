import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helprs";

const Spacing = styled.div<{ spacing: number }>`
  width: 100%;
  height: ${(props) => `${props.spacing * 16}px`};

  ${MediaQuery.MOBILE} {
    height: ${(props) => `${props.spacing * 8}px`};
  }
`;

export default Spacing;
