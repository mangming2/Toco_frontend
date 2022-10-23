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
        <Link href="/fund">
          <a>fund</a>
        </Link>
      </div>
    </>
  );
}

export default AppBar;
