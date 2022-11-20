import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import ChaingeFund from "../src/components/index/ChangeFund";
import DescriptService from "../src/components/index/DescriptService";
import ProjectFund from "../src/components/index/ProjectFund";
import useScrollFadeIn from "../src/hooks/useScrollFadeIn";
import useObserver from "../src/hooks/useObserver";
import Team from "../src/components/index/Team";
import Banner from "../public/banner.png";
import Image from "next/image";
import Community from "../src/components/index/Community";
import Vision from "../src/components/index/Vision";
import Support from "../src/components/index/Support";
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
    3: useScrollFadeIn("up", 1, 0.3),
    4: useScrollFadeIn("up", 1, 0.3),
    5: useScrollFadeIn("up", 1, 0.3),
    6: useScrollFadeIn("up", 1, 0.3),
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
    <Wrap>
      <button onClick={() => handleClickNavLink(0)}>테스트용 버튼</button>

      <StyledFirst ref={heroRef}>
        <Image src={Banner} margin-left="40px" alt="banner" />
      </StyledFirst>
      <StyledSecond {...animatedItem[0]}>
        <ProjectFund />
      </StyledSecond>
      <StyledSecond {...animatedItem[1]}>
        <ChaingeFund />
      </StyledSecond>
      <StyledSecond {...animatedItem[2]}>
        <DescriptService />
      </StyledSecond>
      <StyledSecond {...animatedItem[3]}>
        <Community />
      </StyledSecond>
      <StyledSecond {...animatedItem[4]}>
        <Vision />
      </StyledSecond>
      <StyledSecond {...animatedItem[5]}>
        <Team />
      </StyledSecond>
      <StyledSecond {...animatedItem[6]}>
        <Support />
      </StyledSecond>
    </Wrap>
  );
};

const Wrap = styled.div``;

const StyledFirst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledThird = styled.div``;

export default Home;
