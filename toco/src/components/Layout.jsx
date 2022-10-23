import AppBar from "./AppBar";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
