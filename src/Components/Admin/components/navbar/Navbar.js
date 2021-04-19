import "./Navbar.css";
import avatar from "../../assets/profile2.jpg";

const Navbar = ({ sidebarOpen, openSidebar, name }) => {
  let data = JSON.parse(localStorage.getItem('user'))
  console.log(data);
  let userName = data.user.userName;
  console.log(userName)

  const  logoutHandler =() => {
    console.log("clicked")
    localStorage.clear();
    window.location.href = '/';
}
  return (
    <nav className="navigationbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <h1>{name}</h1>
      </div>
      <div className="navbar__right">
        <a href="!#">
          <i className="fas fa-globe mr-1" aria-hidden="true"></i>
          <i className="fas fa-comments" aria-hidden="true"></i>
        </a>
        <a href="!#">
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
            {userName}
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="!#">
              Profile
            </a>
            <a class="dropdown-item" href="!#">
              Setting
            </a>
            <button class="dropdown-item" onClick={logoutHandler}>
              Log Out
            </button>
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
