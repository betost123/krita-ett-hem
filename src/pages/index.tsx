import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import {
  featuredElementSlideOne,
  promoSlideCards,
  salesItemsData,
} from "../utils/data";
import SaleItemCard from "../components/SaleItemCard";
import { Col, Row } from "react-grid-system";
import { ScaleIn } from "../components/animations/ScaleIn";
import FeaturedElementSlide from "../components/FeaturedElementSlide";
import Spacing from "../components/Spacer";
import H3 from "../components/Typography/H3";
import PromoSlideCard from "../components/PromoSlideCars";
import { FadeIn } from "../components/animations/FadeIn";
import { SlideinFromLeft } from "../components/animations/SlideInFromLeft";
import { SlideinFromBottom } from "../components/animations/SlideInFromBottom";
import HeroBanner from "../components/HeroBanner";
import CallToActionBanner from "../components/CallToActionBanner";

const Container = styled.div`
  padding-left: 1rem;
  padding-bottom: 0;
`;

const PromoSlider = styled.div`
  display: flex;
`;

const PromoSection = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const IndexPage = () => {
  return (
    <div>
      <HeroBanner imageUrl='https://process.fasad.eu/rimage.php?url=images03.fasad.eu%2F373%2F400251%2F1650299%2Fhighres%2F17199201.jpg&m=strict&w=1280&h=0&i=1&c=84' />
      <Spacing spacing={2} />

      <CallToActionBanner
        bgColor='rgba(71, 102, 113, 0.25)'
        title='Want the lastest news?'
        actionText='Sign up for our news letter to stay on top of the latest.'
      />
      <Spacing spacing={3} />

      <PromoSection bgColor='#99B0A7'>
        <H3 textAlign='center' color='#D2E4D6'>
          We recommend
        </H3>
        <Row gutterWidth={16}>
          {salesItemsData.map((item) => (
            <Col md={4} xs={6}>
              <ScaleIn>
                <SaleItemCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  id={item.id}
                  cost={item.cost}
                  liked={item.liked}
                  campaign={item.campaign}
                  sale={item.sale}
                />
              </ScaleIn>
            </Col>
          ))}
        </Row>
      </PromoSection>

      <Spacing spacing={3} />
      <FeaturedElementSlide {...featuredElementSlideOne} />
      <Spacing spacing={3} />

      <PromoSection bgColor='#476671'>
        <SlideinFromBottom>
          <H3 textAlign='center' color='#EBEEFF'>
            Shop our exclusives
          </H3>
        </SlideinFromBottom>
        <PromoSlider>
          {promoSlideCards.map((card) => (
            <PromoSlideCard
              key={card.id}
              image={card.image}
              title={card.title}
              onClick={() => console.log(card.id)}
            />
          ))}
        </PromoSlider>
      </PromoSection>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
