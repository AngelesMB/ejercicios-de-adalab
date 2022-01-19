import logo from "../images/adalab-logo-155x61.png";

const Logo = () => {
  return (
    <a href="https://adalab.es/">
      <img
        className="header-img"
        src={logo}
        alt="Adalab logo"
        title="Adalab logo"
      />
    </a>
  );
};

export default Logo;
