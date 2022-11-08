import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";

export default function DescriptService() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  };

  return <StyledDiv {...animatedItem[2]}>서비스 설명</StyledDiv>;
}

const StyledDiv = styled.div`
  margin-top: 40px;
  display: flex;
  height: 460px;
  background-color: red;
  opacity: 0;
  transition: all 0.5s;
`;
