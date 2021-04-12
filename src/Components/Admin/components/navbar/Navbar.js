import "./Navbar.css";
import avatar from "../../assets/profile2.jpg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <h1>Proposal</h1>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fas fa-globe mr-1" aria-hidden="true"></i>
          <i className="fas fa-comments" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fas fa-bell" aria-hidden="true"></i>
        </a>
        <div class="dropdown show">
          <a
            class="btn dropdown-toggle"
            href="!#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Luai Ahm
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="!#">
              Profile
            </a>
            <a class="dropdown-item" href="!#">
              Setting
            </a>
            <a class="dropdown-item" href="!#">
              Logout
            </a>
          </div>
        </div>
        <a href="#!">
          <img
            width="30"
            style={{ borderRadius: "50%" }}
            src={avatar}
            alt="avatar"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
