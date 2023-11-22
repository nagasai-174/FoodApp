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
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header