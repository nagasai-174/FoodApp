import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/common"
const Header = () => {
    return (
      <div className="header">
        <img
          alt="logo-img"
          className="logo-img"
          src={LOGO_URL}
        />
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
              <Link to="/about">About </Link>
              </li>
            <li>
              <Link to="/contact">ContactUs</Link>
              </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header