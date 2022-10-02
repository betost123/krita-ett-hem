import * as React from "react";
import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { PriceModel } from "../utils/models";
import { MediaQuery } from "../utils/styling-helprs";
import ActionText from "./Typography/ActionText";
import H4 from "./Typography/H4";
import InfoText from "./Typography/InfoText";
import HoverCursor from "../images/cursors/hover-cursor.svg";
import IconButton from "./IconButton";

interface SaleItemCardProps {
  image: string;
  title: string;
  cost: PriceModel;
  id: string;
  sale?: boolean;
  campaign?: boolean;
  liked?: boolean;
}

const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;

  ${MediaQuery.TABLET} {
    height: 300px;
  }
`;

const Container = styled.div`
  background-color: #ebeeff;
  position: relative;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeartIconContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const FlagContainer = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 0.5px 2rem 0.5px 1px;

  ${MediaQuery.TABLET} {
    padding: 0.25px 1rem 0.25px 0.25px;
  }
`;

const FlagsSections = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
`;

const SaleItemCard: React.FunctionComponent<SaleItemCardProps> = ({
  image,
  title,
  cost,
  id,
  sale,
  campaign,
  liked,
}) => {
  const [isLiked, setIsLiked] = React.useState(liked);
  const onClickSave = () => setIsLiked(!isLiked);

  return (
    <Container>
      <Image src={image} alt={`Sale item ${title}`} />

      <HeartIconContainer>
        <IconButton
          icon={<HeartIcon color={isLiked ? "#E87A83" : "black"} />}
          onClick={onClickSave}
        />
      </HeartIconContainer>

      <FlagsSections>
        {sale && (
          <FlagContainer bgColor='white'>
            <ActionText color='#E87A83'>SALE</ActionText>
          </FlagContainer>
        )}
        {campaign && (
          <FlagContainer bgColor='#385772'>
            <ActionText color='white'>CAMPAIGN</ActionText>
          </FlagContainer>
        )}
      </FlagsSections>

      <InfoContainer style={{ cursor: `url(${HoverCursor}), auto` }}>
        <InfoText color='#385772'>{title}</InfoText>
        <H4 color='#385772'>
          {cost.cost}
          {cost.currency}
        </H4>
      </InfoContainer>
    </Container>
  );
};

export default SaleItemCard;
