import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import ChaingeFund from "../src/components/index/ChangeFund";
import DescriptService from "../src/components/index/DescriptService";
import ProjectFund from "../src/components/index/ProjectFund";
import useScrollFadeIn from "../src/hooks/useScrollFadeIn";
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return (
    <>
      <StyledFirst>Hi</StyledFirst>
      <div {...animatedItem[0]}>
        <DescriptService />
      </div>
      <div {...animatedItem[1]}>
        <ProjectFund />
      </div>
      <div {...animatedItem[2]}>
        <ChaingeFund />
      </div>
    </>
  );
};

const StyledFirst = styled.div`
  color: black;
  background-color: red;
  margin-top: 1500px;
`;
const StyledSecond = styled.div`
  color: black;
  background-color: red;
  margin-top: 1500px;
  opacity: 0;
  transition: all 0.5s;
`;
const StyledThird = styled.div`
  color: black;
  background-color: red;
  margin-top: 1500px;
  opacity: 0;
  transition: all 0.5s;
`;

export default Home;
