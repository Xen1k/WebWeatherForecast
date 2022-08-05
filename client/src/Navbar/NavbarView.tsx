import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavbarView = (): JSX.Element => (
    <nav className="navbar-container">
        <p className="navbar-title"> Xenik Weather </p>
        <NavLink className="navlink-container" to="/search">
            Поиск города
        </NavLink>
        <NavLink className="navlink-container" to="/trending" >
            Популярные города
        </NavLink>
        <NavLink className="navlink-container" to="/info" >
            Информация
        </NavLink>
        <div style={{ flex: 1.5 }} />
    </nav>
)

export default NavbarView;