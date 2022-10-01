import * as React from "react";
import type { HeadFC } from "gatsby";
import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import styled from "styled-components";
import { salesItemsData } from "../utils/data";
import SaleItemCard from "../components/SaleItemCard";

const Container = styled.div`
  padding: 1rem;
`;

const SaleItemsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const IndexPage = () => {
  return (
    <div>
      <Container>
        <SaleItemsRow>
          {salesItemsData.map((item) => (
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
          ))}
        </SaleItemsRow>
      </Container>
      <HeroBanner imageUrl='https://cdn.shopify.com/s/files/1/1149/3532/products/honeydew-splatter-1286_1184x768.jpg?v=1645479417' />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
