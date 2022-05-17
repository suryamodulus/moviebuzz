import NavBar from "components/NavBar";

const BaseLayout = ({ headerText, children }) => {
  return (
    <>
      <header className="top-0 sticky">
        <NavBar title={headerText || "MovieBuff"}></NavBar>
      </header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
