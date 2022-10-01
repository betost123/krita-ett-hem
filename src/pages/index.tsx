import * as React from "react";
import type { HeadFC } from "gatsby";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import styled from "styled-components";
import { featuredElementSlideOne, salesItemsData } from "../utils/data";
import SaleItemCard from "../components/SaleItemCard";
import { Col, Row } from "react-grid-system";
import { ScaleIn } from "../components/animations/ScaleIn";
import FeaturedElementSlide from "../components/FeaturedElementSlide";
import Spacing from "../components/Spacer";

const Container = styled.div`
  padding: 1rem;
`;

const IndexPage = () => {
  return (
    <div>
      <Spacing spacing={8} />
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
      <Spacing spacing={3} />
      <FeaturedElementSlide {...featuredElementSlideOne} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
