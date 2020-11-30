import "./index.css";
import logo from "../../img/logo.svg";
import logout from "../../img/logout.svg";
import I from "../../img/I.svg";

function Header() {
  return (
    <div className="header">
      <a href="#">
        <img src={logo} alt="logo" className="header-logo" />
      </a>
      <div className="header-end">
        <span className="header-name">Имя</span>
        <img src={I} alt="I" className="header-I" />
        <a className="header-logout-link">
          <img src={logout} alt="logout" />
          <span className="header-name-2">Выйти</span>
        </a>
      </div>
    </div>
  );
}

export default Header;