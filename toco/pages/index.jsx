import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import useScrollFadeIn from "../src/hooks/useScrollFadeIn";
const Home = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return (
    <>
      <StyledFirst {...animatedItem[0]}>메인페이지</StyledFirst>
      <StyledSecond {...animatedItem[1]}>메인페이지</StyledSecond>
      <StyledThird {...animatedItem[2]}>메인페이지</StyledThird>
    </>
  );
};

const StyledFirst = styled.div`
  color: black;
  background-color: red;
  margin-top: 1500px;
  opacity: 0;
  transition: all 0.5s;
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
