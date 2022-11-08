import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
function AppBar() {
  const router = useRouter();
  return (
    <Wrap>
      <StyledLinkBox>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/ProjectFund">
          <a>projectfund</a>
        </Link>
        <Link href="/PennyFund">
          <a>pennyfund</a>
        </Link>
        <Link href="/About">
          <a>About</a>
        </Link>
        <Link href="/MyPage">
          <a>mypage</a>
        </Link>
      </StyledLinkBox>
    </Wrap>
  );
}

export default AppBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
`;

const StyledLinkBox = styled.div`
  width: 487px;
  height: 24px;
  padding: 0px;
  gap: 32px;
`;
