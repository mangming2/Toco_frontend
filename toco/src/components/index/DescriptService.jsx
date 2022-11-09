import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";

export default function DescriptService() {
  return <StyledDiv>서비스 설명</StyledDiv>;
}

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  background-color: red;
`;
