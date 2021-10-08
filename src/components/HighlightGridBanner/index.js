import React from "react";
import { Container, GridItem } from "./styles";
const HighlightGridBanner = ({ image }) => {
  return (
    <Container>
      <GridItem>
        <img src={image} alt="wine" />
      </GridItem>
      <GridItem>
        <img src={image} alt="wine" />
      </GridItem>
      <GridItem>
        <img src={image} alt="wine" />
      </GridItem>
      <GridItem>
        <img src={image} alt="wine" />
      </GridItem>
    </Container>
  );
};

export default HighlightGridBanner;
