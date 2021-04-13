import "./Sidebar.css";
import logo from "../../assets/log.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="row">
          <div className="col-md-12">
            <img className="img-fluid" src={logo} alt="not found" />
          </div>
        </div>
        {/* <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Codersbite</h1>
        </div> */}
        {/* <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i> */}
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <div className="row">
            <div className="col-md-2">
              <i className="fa fa-home icon"></i>
            </div>
            <div className="col-md-10">
              <a href="/admin">Dashboard</a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-chart-bar icon" aria-hidden="true"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="#">
                new project
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-comments icon"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="#">
                Chat Room
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-user icon"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="/admin/users">
                Users
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-calendar-alt icon"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="/admin/proposal">
                Proposel
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-cog icon"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="#">
                Setting
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__link">
          <div className="row">
            <div className="col-md-2">
              <i className="fas fa-newspaper icon"></i>
            </div>
            <div className="col-md-10">
              <a className="white" href="#">
                News
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
