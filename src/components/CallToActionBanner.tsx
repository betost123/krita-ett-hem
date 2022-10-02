import * as React from "react";
import styled from "styled-components";
import ActionText from "./Typography/ActionText";
import H4 from "./Typography/H4";
import SmallBody from "./Typography/SmallBody";

interface CallToActionProps {
  title: string;
  actionText: string;
  mailto?: string;
  onClick?: () => void;
  bgColor?: string;
}

const Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100vw;
  height: 150px;
  display: flex;
  padding: 1rem;
  justify-content: center;
  margin-left: -8px;
  flex-direction: column;
  text-align: center;
`;

const MailtoLink = styled.a`
  text-decoration: none;
`;

const CallToActionBanner: React.FunctionComponent<CallToActionProps> = ({
  title,
  actionText,
  mailto,
  onClick,
  bgColor = "#B9C0F8",
}) => (
  <Container bgColor={bgColor}>
    <H4 color='white' textAlign='center'>
      {title}
    </H4>
    <MailtoLink href={`mailto:${mailto}`}>
      <SmallBody color='black' textAlign='center'>
        {actionText}
      </SmallBody>
    </MailtoLink>
  </Container>
);

export default CallToActionBanner;
