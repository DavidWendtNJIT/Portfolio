import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="top-logo">
             David Wendt Portfolio
          </a>
          <div className="itemContainer">
            <a
              href="https://www.google.com/maps/place/Massapequa+Park,+NY+11762/@40.6782227,-73.4678405,14z/data=!3m1!4b1!4m5!3m4!1s0x89c27f805de30a07:0x2d8d91e15e917759!8m2!3d40.6804893!4d-73.4553119?hl=en&authuser=0"
              target="_blank"
              rel="noreferrer"
            >
              <LocationOnIcon className="top-icon" />
            </a>
            <span>Massapequa Park, NY</span>
          </div>
          <div className="itemContainer">
            <a href="#contact">
              <MailIcon className="top-icon" />
            </a>
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

export default Topbar;
