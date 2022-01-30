import "../styles/Header.scss";
import HeaderForm from "./HeaderForm";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1>
          <i className="fas fa-envelope-open-text header__icon" /> Gmail
        </h1>
        <div className="header__container--right">
          <div className="button">
            <Link className="header__link" to="/">
              <i className="fas fa-inbox" />
              Recibidos
            </Link>
          </div>
          <div className="button">
            <Link className="header__link" to="/trash">
              <i className="fa fa-trash" aria-hidden="true" />
              Papelera
            </Link>
          </div>
          <HeaderForm
            searchValue={props.searchValue}
            updateSearch={props.updateSearch}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
