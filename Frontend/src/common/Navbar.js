import { NavLink } from "react-router-dom";
import "./Navbar.css";
import dana_logo from "../assets/image/logo/logo-final.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-logo-div">
        <NavLink className="h-full site-logo" to="/">
          <img className="h-full" src={dana_logo} alt="Logo" />
        </NavLink>
      </div>
      <ul className="nav-ul-list">
        <li>
          <NavLink
            className="navlink"
            to="/"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid rgb(24, 174, 19)" : "none",
              color: isActive ? "rgb(24, 174, 19)" : "black",
            })}
          >
            Home
          </NavLink>
        </li>

        {/* <li>
                    <NavLink className="navlink" to='/about'
                        style={({ isActive }) => ({
                            borderBottom : isActive ? "2px solid rgb(16, 244, 8)" :"none",
                            color : isActive ? "rgb(16, 244, 8)":"black"
                          })}>
                        About
                    </NavLink>
                </li> */}
        <li>
          <NavLink
            className="navlink"
            to="/programs"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid rgb(24, 174, 19)" : "none",
              color: isActive ? "rgb(24, 174, 19)" : "black",
            })}
          >
            Programs
          </NavLink>
        </li>
        {/* <li>
                    <NavLink className="navlink" to='/gallery'
                        style={({ isActive }) => ({
                            borderBottom : isActive ? "2px solid rgb(16, 244, 8)" :"none",
                            color : isActive ? "rgb(16, 244, 8)":"black"
                          })}>
                        Gallery
                    </NavLink>
                </li> */}
        <li>
          <NavLink
            className="navlink"
            to="/members"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid rgb(24, 174, 19)" : "none",
              color: isActive ? "rgb(24, 174, 19)" : "black",
            })}
          >
            Members
          </NavLink>
        </li>
        <li>
          {/* <NavLink className="navlink" to='/donate'
                        style={({ isActive }) => ({
                            borderBottom : isActive ? "2px solid rgb(16, 244, 8)" :"none",
                            color : isActive ? "rgb(16, 244, 8)":"black"
                          })}>
                        Donate
                    </NavLink> */}
        </li>
      </ul>
      <div className="nav-donate">
        {/* <div> */}
        <NavLink
          className="navlink nav-donate-box"
          to="/donate"
          style={({ isActive }) => ({
            color: isActive ? "rgb(16, 244, 8)" : "white",
          })}
        >
          <div>Donate</div>
        </NavLink>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
