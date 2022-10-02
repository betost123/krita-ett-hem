import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import Spacing from "./Spacer";
import H4 from "./Typography/H4";

interface PromoSlideProps {
  image: string;
  title: string;
  onClick: () => void;
}

const Conatiner = styled.div`
  position: relative;
  width: 25vw;
  height: 500px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const TextSection = styled.div`
  position: absolute;
  top: 50%;
  padding: 1rem;
  z-index: 5;
  width: 90%;
`;

const PromoSlideCard: React.FunctionComponent<PromoSlideProps> = ({
  image,
  title,
  onClick,
}) => {
  return (
    <div style={{ overflowY: "hidden" }}>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <Conatiner>
          <Image src={image} alt='promo image' />
          <TextSection>
            <H4 color='white' textAlign='center'>
              {title}
            </H4>
            <Spacing spacing={2} />
            <Button variant='secondary' onClick={onClick}>
              Show More
            </Button>
          </TextSection>
        </Conatiner>
      </motion.div>
    </div>
  );
};

export default PromoSlideCard;
