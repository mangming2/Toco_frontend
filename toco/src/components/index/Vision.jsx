import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";

export default function Vision() {
  return (
    <Wrap>
      <StyledTitle>ToCo 프로젝트 VISION</StyledTitle>
      <StyledDesWrap>
        <SmallTitle>· 기부 생태계의 혁신</SmallTitle>
        <SmallTitle>· 100% 신뢰할 수 있는 기부</SmallTitle>
        <SmallTitle>· 사회적 불평등 해소</SmallTitle>
        <SmallTitle>· 블록체인 기술의 진보</SmallTitle>
        <SmallTitle>· 이해관계자들 간의 행복 선순환</SmallTitle>
      </StyledDesWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;
const StyledDesWrap = styled.div`
  text-align: center;
`;

const SmallTitle = styled.div`
  margin-top: 30px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 29px;
  text-align: center;

  color: #44c144;
`;
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* [웹] 페이지 제목 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;

  /* Muted Color */

  color: #483620;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 60px;
`;
