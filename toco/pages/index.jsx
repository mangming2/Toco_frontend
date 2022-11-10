import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import ChaingeFund from "../src/components/index/ChangeFund";
import DescriptService from "../src/components/index/DescriptService";
import ProjectFund from "../src/components/index/ProjectFund";
import useScrollFadeIn from "../src/hooks/useScrollFadeIn";
import useObserver from "../src/hooks/useObserver";
import Team from "../src/components/index/Team";
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));

  const handleClickNavLink = (index) => {
    const refs = [heroRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };
  return (
    <>
      <StyledFirst>
        <button onClick={() => handleClickNavLink(0)}></button>
      </StyledFirst>
      <StyledFirst ref={heroRef}>Hi</StyledFirst>
      <div {...animatedItem[0]}>
        <DescriptService />
      </div>
      <div {...animatedItem[1]}>
        <ProjectFund />
      </div>
      <div {...animatedItem[2]}>
        <ChaingeFund />
      </div>
      <div>
        <Team />
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
