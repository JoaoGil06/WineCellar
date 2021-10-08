import React from "react";
import HighlightBanner from "../../components/HighlightBanner";
import HighlightGridBanner from "../../components/HighlightGridBanner";

import BottlesImage from "../../assets/bottlesImage.jpg";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <HighlightBanner image={BottlesImage} />

      <HighlightGridBanner image={BottlesImage} />
    </Container>
  );
};

export default Home;
