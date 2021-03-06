import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../../images/svgs/logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" width="100" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="links button_pf">
                Porfolio
              </Link>
            </li>
            {/* <li>
              <Link to="/login" className="links">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
