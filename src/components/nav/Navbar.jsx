import "./navbar.scss";
import Drawer from "../drawer/Drawer";
import logo from "../../assets/uniwa_logo.png";
const Navbar = () => {
  return (
    <div className="navbar px-3">
      <div className="left">
        <img src={logo} alt="uniwa logo"></img>
        <span className="ml-1">Αρχική</span>
      </div>

      <div className="right">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
