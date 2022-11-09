import "./topbar.scss"
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href=".intro" className="logo">
            Portfolio 2022
          </a>
          <div className="itemContainer">
            <LocationOnIcon className="icon" />
            <span>Massapequa Park, NY</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>davidwendtcodes@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar