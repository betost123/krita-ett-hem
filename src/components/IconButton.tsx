import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import HoverCursor from "../images/cursors/hover-cursor.svg";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButtonStyle = styled.button`
  background-color: transparent;
  border-width: 0;
  border-radius: 50%;
  padding: 8px;
`;

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <motion.div whileTap={{ scale: 1.2 }}>
      <IconButtonStyle
        onClick={onClick}
        style={{ cursor: `url(${HoverCursor}), auto` }}
      >
        {icon}
      </IconButtonStyle>
    </motion.div>
  );
};

export default IconButton;
