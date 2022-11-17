import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";

export default function Community() {
  return (
    <Wrap>
      <StyledTitle>ToCo 커뮤니티</StyledTitle>
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
          <SmallTitle>투코 커뮤니티 이해관계자</SmallTitle>
          <div>
            <span>기부자</span>
            <StyledSpan>
              기부자들은 커뮤니티 거버넌스를 통해 기부 대상자, 기부 물품
              제조사를 선정 할 수 있습니다. <br />
              기부자들만의 커뮤니티를 만들어, 긍정적인 선순환을 유도합니다.
            </StyledSpan>
            <span>기부 물품 제조사</span>
            <StyledSpan>
              기부 물품 제조사는 엄격한 기준으로 선정합니다.
              <br />
              지갑을 사용해야하며, 주기적으로 거래내역을 검수해야합니다.
              <br />
              투코에 등록 완료 시, 우선순의로 계약을 고려합니다.
            </StyledSpan>
            <span>기부 대상자</span>
            <StyledSpan>
              기부를 맏는 대상자 입니다.
              <br />
              실제로 온라인 커뮤니티에서 크게 활동하지는 않아도, 기부자들과의
              오프라인 만남 혹은 다양한 이벤트에 참여할 수 있습니다.
              <br />
            </StyledSpan>
            <span>운영진</span>
            <StyledSpan>
              운영진은 원격업무를 위주로 진행하며, 컨트롤 타워의 역할을
              맡습니다.
              <br />
              Web3 시대의 공간적 한계를 초월해 기부 재단을 적은 운영비로도
              운영할 수 있는 근거가 됩니다.
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
