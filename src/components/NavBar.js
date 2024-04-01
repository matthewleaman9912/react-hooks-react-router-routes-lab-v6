import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/"
        style={NavBar.css}
        className="nav-link"
        >
        Home
      </NavLink>
      <NavLink 
        to="/directors"
        style={NavBar.css}
        className="nav-link"
        >
        Directors
      </NavLink>
      <NavLink 
        to="/actors"
        style={NavBar.css}
        className="nav-link"
        >
        Actors
      </NavLink>

    </nav>
    );
};

export default NavBar;
