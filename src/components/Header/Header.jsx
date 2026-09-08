import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    const URL_PREFIX = import.meta.env.BASE_URL;

    return (
        <header>
            <nav>
                <NavLink to={`${URL_PREFIX}brownie`}>Brownie</NavLink>
                <NavLink to={`${URL_PREFIX}pessic`}>Pa de pessic</NavLink>
                <NavLink to={`${URL_PREFIX}cookies`}>Cookies</NavLink>
                <NavLink to={`${URL_PREFIX}santiago`}>Pastís de Santiago</NavLink>
                <NavLink to={`${URL_PREFIX}cheescake`}>Cheescake</NavLink>
            </nav>
        </header>
    );
}

export default Header;