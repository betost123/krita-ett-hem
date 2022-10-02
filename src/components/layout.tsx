import * as React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import CursorStandard from "../images/cursors/cursor-standard.svg";
import Footer from "./Footer";
import Spacing from "./Spacer";

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
      <div style={{ cursor: `url(${CursorStandard}), auto` }}>
        <NavBar />
        <GlobalStyle />

        {children}
        <Spacing spacing={4} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
