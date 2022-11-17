import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

import Logo from "../../public/logo2.png";
import Profile from "../../public/profile.png";
function AppBar() {
  const router = useRouter();
  return (
    <Wrap>
      <Image src={Logo} width="70px" height="30px" margin-left="40px" />
      <StyledLinkBox>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/ProjectFund">
          <StyledLink>projectfund</StyledLink>
        </Link>
        <Link href="/PennyFund">
          <StyledLink>pennyfund</StyledLink>
        </Link>
        <Link href="/About">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/MyPage">
          <StyledLink>mypage</StyledLink>
        </Link>
      </StyledLinkBox>
      <Image src={Profile} width="40px" height="40px" margin-left="40px" />
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2e7d5;

  height: 75px;
`;

const StyledLinkBox = styled.div`
  width: 487px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  /* Body/Medium */

  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-right: 32px;

  color: #483620;
`;
