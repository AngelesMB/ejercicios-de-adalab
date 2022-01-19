import "../styles/Header.scss";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
