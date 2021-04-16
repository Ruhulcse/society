import { useState } from "react";
import "./App.css";
import "./index.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(true);
  };
  let token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    window.location.href = "/";
  }
  return (
    <div className="contain">
      <Navbar
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        name="Dashboard"
      />
      {/* <Main /> */}
      Here will be Dashboard content
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;
