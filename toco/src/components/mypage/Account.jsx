import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";

export default function Account() {
  return (
    <Wrap>
      <div>My Page</div>
      <Image src={Logo} width="82px" height="82px" />
      <div>
        <div>Account 1</div>
        <div>0x121213124141</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
