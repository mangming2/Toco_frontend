import React from "react";
import styled from "styled-components";
function Support() {
  return (
    <Wrap>
      <StyledTitle>투코 프로젝트에 후원 해주세요</StyledTitle>
      <button>후원하기</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 58px;
  /* identical to box height */

  text-align: center;

  /* Muted Color */

  color: #483620;
`;

export default Support;
