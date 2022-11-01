import Link from "next/link";
import { useRouter } from "next/router";

function AppBar() {
  const router = useRouter();
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default AppBar;
