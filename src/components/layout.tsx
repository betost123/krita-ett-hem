import * as React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";

interface LayoutProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: -apple-system, Roboto, sans-serif, serif;
    color: black;
    overflow-x: hidden;
    margin: 0rem;
  }
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <NavBar />
      <GlobalStyle />

      {children}
    </React.Fragment>
  );
};

export default Layout;
