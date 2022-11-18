import React from "react";
import styled from "styled-components";
function Support() {
  return (
    <Wrap>
      <StyledTitle>투코 프로젝트에 후원 해주세요</StyledTitle>
      <StyledButton>후원하기</StyledButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;

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
const StyledButton = styled.button`
  margin-top: 116px;
  margin-bottom: 67px;
  /* Secondary Color */
  width: 139px;
  height: 58px;
  background: #6d9886;
  border-radius: 8px;

  /* Body/Large */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */

  /* Bright */

  color: #f7f7f7;
`;

export default Support;
