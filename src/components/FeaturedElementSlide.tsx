import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helprs";
import { FadeIn } from "./animations/FadeIn";
import { SlideinFromLeft } from "./animations/SlideInFromLeft";
import Button from "./Buttons";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import H3 from "./Typography/H3";
import InfoText from "./Typography/InfoText";

interface FeaturedElementSlideProps {
  image: string;
  title: string;
  description?: string;
  link?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextSection = styled.div`
  padding: 2rem;

  ${MediaQuery.TABLET} {
    padding: 1rem;
  }
`;

const FeaturedElementSlide: React.FunctionComponent<
  FeaturedElementSlideProps
> = ({ image, title, description, link, buttonText, onClick }) => {
  return (
    <Row gutterWidth={0}>
      <Col md={3} xs={6}>
        <TextSection>
          <SlideinFromLeft>
            <H3 textAlign='center'>{title}</H3>
          </SlideinFromLeft>
          <Spacing spacing={2} />
          <Divider color='#E87A83' />
          <Spacing spacing={2} />

          <SlideinFromLeft delay={0.25}>
            <InfoText textAlign='center'>{description}</InfoText>
          </SlideinFromLeft>
          <Spacing spacing={2} />

          <Button variant='tetriary'>{buttonText}</Button>
        </TextSection>
      </Col>
      <Col md={9} xs={6}>
        <FadeIn>
          <Image src={image} alt={`Featured Slide ${title}`} />
        </FadeIn>
      </Col>
    </Row>
  );
};

export default FeaturedElementSlide;
