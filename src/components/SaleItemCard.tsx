import * as React from "react";
import styled from "styled-components";
import { HeartIcon } from "../icons/HeartIcon";
import { PriceModel } from "../utils/models";
import ActionText from "./Typography/ActionText";
import H4 from "./Typography/H4";
import InfoText from "./Typography/InfoText";

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
  width: 420px; //TODO: put size in cols
  height: 550px;
  object-fit: cover;
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

const IconButtonStyle = styled.button`
  background-color: transparent;
  border-width: 0;
  border-radius: 50%;
  padding: 8px;
`;

const FlagContainer = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 0.25rem 2rem 0.25rem 0.5rem;
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
        <IconButtonStyle onClick={onClickSave}>
          <HeartIcon color={isLiked ? "#E87A83" : "black"} />
        </IconButtonStyle>
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

      <InfoContainer>
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