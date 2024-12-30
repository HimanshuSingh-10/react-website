import { NavLink, useParams } from "react-router-dom";

function NavBar() {
  const { username } = useParams();
  const displayUsername = username || "Himanshu"; 

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="src/images/logo.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to={`/${displayUsername}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/about/${displayUsername}`}>About</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/${displayUsername}`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={`/contact/${displayUsername}`}>Contact</NavLink>
          </li>
        </ul>

        <div className="user-login">
          <NavLink href="#login">
            <img src="src/images/user.png" className="user-icon" alt="User Icon" />
            {username ? `${displayUsername}'s Profile` : "Login"}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
