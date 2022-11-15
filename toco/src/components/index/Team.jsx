import React from "react";
import TeamCard from "./TeamCard";
import Image from "next/image";
import ProjectDes from "../../../public/projectdes.png";
import styled from "styled-components";

function Team() {
  return (
    <Wrap>
      <StyledTitle>팀 소개</StyledTitle>
      <div>투코 운영진을 소개합니다.</div>
      <TeamWrap>
        <TeamCard />
        <TeamCard />
      </TeamWrap>
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
const TeamWrap = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export default Team;
