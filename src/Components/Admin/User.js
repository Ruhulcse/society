import { useState } from "react";
import "./App.css";
import "./index.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Helmet } from "react-helmet";
const User = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(true);
  };
  return (
    <div className="contain">
      <Helmet>
        <title>Dashboard || Users</title>
      </Helmet>
      <Navbar
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        name="Users"
      />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default User;
