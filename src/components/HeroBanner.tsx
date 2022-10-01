import * as React from "react";
import styled from "styled-components";
import Title from "./Typography/Title";

interface HeroBannerProps {
  imageUrl: string;
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

const TextSection = styled.div`
  padding: 1rem;
  z-index: 5;
`;

const HeroBanner: React.FunctionComponent<HeroBannerProps> = ({ imageUrl }) => {
  return (
    <StyledContainer>
      <ImageWrapper>
        <Image src={imageUrl} />
      </ImageWrapper>
      <TextSection>
        <Title>Krita Ett Hem</Title>
      </TextSection>
    </StyledContainer>
  );
};

export default HeroBanner;
