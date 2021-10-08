import React from "react";
import { Container } from "./styles";
const HighlightBanner = ({ image }) => {
  return (
    <Container>
      <img src={image} alt="wine" />
    </Container>
  );
};

export default HighlightBanner;
