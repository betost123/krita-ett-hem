import * as React from "react";
import styled from "styled-components";

export const Divider = styled.div<{ color?: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color ?? "white"};
`;
