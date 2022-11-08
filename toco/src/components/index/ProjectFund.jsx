import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import FundCard from "../fund/FundCard";
import { useRef, useEffect } from "react";

export default function ProjectFund() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };
  function useHorizontalScroll(event) {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
  const scrollRef = useHorizontalScroll();
  return (
    <StyledDiv {...animatedItem[2]}>
      <span>프로젝트 펀딩</span>
      <Container ref={scrollRef}>
        <FundCard />
        <FundCard />
        <FundCard />
        <FundCard />
        <FundCard />
        <FundCard />
        <FundCard />
        <FundCard />
      </Container>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  background-color: red;
  opacity: 0;
  transition: all 0.5s;
  overflow: hidden;
`;

const Container = styled.div`
  //가로스크롤
  display: flex;
  gap: 16px;
  height: 350px;
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
