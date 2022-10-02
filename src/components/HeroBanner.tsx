import * as React from "react";
import styled from "styled-components";
import { ScaleIn } from "./animations/ScaleIn";
import { SlideinFromBottom } from "./animations/SlideInFromBottom";
import Title from "./Typography/Title";

interface HeroBannerProps {
  imageUrl: string;
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
`;

const HeroBanner: React.FunctionComponent<HeroBannerProps> = ({ imageUrl }) => {
  return (
    <StyledContainer>
      <ImageWrapper>
        <ScaleIn>
          <Image src={imageUrl} />
        </ScaleIn>
      </ImageWrapper>
      <SlideinFromBottom delay={0.5}>
        <TextSection>
          <Title color='white'>Krita Ett Hem</Title>
        </TextSection>
      </SlideinFromBottom>
    </StyledContainer>
  );
};

export default HeroBanner;
