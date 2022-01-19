import "../styles/Menu.scss";
import Link from "./Link";

const Menu = () => {
  return (
    <nav>
      <ul className="header-menu">
        <Link linkName="Blog" href="https://adalab.es/blog/" openInNewTab />
        <Link
          linkName="Contacto"
          href="https://adalab.es/contacto/"
          openInNewTab={false}
        />
      </ul>
    </nav>
  );
};

export default Menu;
