import { Link } from "gatsby";
import * as React from "react";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { Divider } from "./Divider";
import Spacing from "./Spacer";
import ActionText from "./Typography/ActionText";
import H4 from "./Typography/H4";
import SmallBody from "./Typography/SmallBody";

const Container = styled.div`
  padding: 2rem;
  background-color: rgba(71, 102, 113, 0.25);
`;

const StyledfooterTitle = styled.h1`
  font-size: 40px;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 300;
`;

const LinkColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const VerticalSpacer = styled.div`
  width: 2rem;
`;

const GutterInfo = styled.div`
  display: flex;
`;

const Footer = () => (
  <Container>
    <Divider />
    <StyledfooterTitle>Krita ett hem</StyledfooterTitle>
    <Spacing spacing={2} />
    <Row gutterWidth={16} justify='between'>
      <Col md={3} xs={6}>
        <SmallBody color='white'>
          Krita ett Hem är ett svenskt träningsvarumärke för kvinnor, av
          kvinnor. Röhnisch grundades 1945 och har sedan dess designat produkter
          med syfte att få kvinnor att känna sig självsäkra, bekväma och starka.
          Röhnisch sortiment består av träningskläder, golfkläder, jackor och
          badkläder i storlekarna XS till 3XL, där funktion och stil går hand i
          hand och hållbarhet står i centrum. Skapat i Sverige av vårt kvinnliga
          designteam.
        </SmallBody>
      </Col>
      <Col md={3} xs={6}>
        <LinkColumnSection>
          <ActionText color='white'>Om Krita ett Hem</ActionText>
          <LinkItem to=''>About Krita ett Hem</LinkItem>
          <LinkItem to=''>Contact us</LinkItem>
          <LinkItem to=''>Investors</LinkItem>
          <LinkItem to=''>Designers</LinkItem>
          <LinkItem to=''>Sustainability</LinkItem>
          <LinkItem to=''>Work with us</LinkItem>
        </LinkColumnSection>
      </Col>
      <Col md={3} xs={6}>
        <LinkColumnSection>
          <ActionText color='white'>Customer Service</ActionText>
          <LinkItem to=''>Payments</LinkItem>
          <LinkItem to=''>Deliveries</LinkItem>
          <LinkItem to=''>Return and Refunds</LinkItem>
          <LinkItem to=''>FAQ</LinkItem>
          <LinkItem to=''>Terms and Conditions</LinkItem>
        </LinkColumnSection>
      </Col>
      <Col md={3} xs={6}>
        <LinkColumnSection>
          <ActionText color='white'>Follow Us</ActionText>
          <LinkItem to=''>Instagram</LinkItem>
          <LinkItem to=''>TikTok</LinkItem>
          <LinkItem to=''>Newsletter</LinkItem>
        </LinkColumnSection>
      </Col>
    </Row>
    <Spacing spacing={2} />
    <Divider />
    <Spacing spacing={1} />
    <GutterInfo>
      <LinkItem to=''>Terms and Conditions</LinkItem>
      <VerticalSpacer />
      <LinkItem to=''>Cookies and Privacy Policy</LinkItem>
    </GutterInfo>
  </Container>
);

export default Footer;
