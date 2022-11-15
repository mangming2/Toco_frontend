import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";

export default function DescriptService() {
  return (
    <Wrap>
      <StyledTitle>ToCo 프로젝트 소개</StyledTitle>
      <StyledDesWrap>
        <div>
          <SmallTitle>투명한 코인 TOcO</SmallTitle>
          <StyledSpan>
            투코는, 블록체인 생태계를 활용해, 기부금이 모이고, 사용되는 내역들이
            모두 온라인상에 공개됩니다.
          </StyledSpan>
          <StyledSpan>
            우리는 기부를 온체인화해, 사람의 실수를 최소화하고, 개선하고자
            합니다.
          </StyledSpan>
        </div>
        <div>
          <SmallTitle>함께하는 코인 TOcO</SmallTitle>
          <div>
            <StyledSpan>투코는, 블록체인 기부 커뮤니티를 운영합니다</StyledSpan>
            <StyledSpan>
              커뮤니티에는, 기부를 하는 기부자들, 기부물품을 판매하는 착한
              업체들, 기부를 받는 기부대상자들이 함께 어울릴 수 있습니다.
            </StyledSpan>
          </div>
        </div>
        <div>
          <SmallTitle>투코의 핵심 경쟁력</SmallTitle>
          <div>
            <StyledSpan>
              효율적인 운영 : 기존 기부 업체 평균 운영비(12%) vs 투코 프로젝트
              운영비(5%){" "}
            </StyledSpan>
            <StyledSpan>
              <p>기부금의 투명화 :</p>
              <p>
                기부금이 사용되는 99%의 내역들을 자동 온체인화(블록체인 시스템
                상 등록), 누구든지 내역을 볼 수 있습니다.
              </p>
            </StyledSpan>
          </div>
        </div>
      </StyledDesWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDesWrap = styled.div`
  align-items: flex-start;
`;
const StyledSpan = styled.p``;

const SmallTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
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
`;
