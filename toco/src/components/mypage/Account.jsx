import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/logo.png";

export default function Account() {
  return (
    <Wrap>
      <Image src={Logo} width="82px" height="82px" />
      <div>
        <p>Account 1</p>
        <p>0x121213124141</p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
