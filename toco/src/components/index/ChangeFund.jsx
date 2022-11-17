import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import FundCard from "../fund/FundCard";
import { useRef, useEffect } from "react";

export default function ChangeFund() {
  const scrollRef = useHorizontalScroll();
  return (
    <Wrap>
      <Title>잔돈 펀딩</Title>
      <StyledDiv>
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
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 154px;
  margin-left: 100px;
`;

const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  color: #483620;
  align-items: flex-start;
`;

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  width: 1090px;
  justify-content: center;
  align-items: center;
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
