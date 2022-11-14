import AppBar from "./AppBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
