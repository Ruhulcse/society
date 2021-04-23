import { useState } from "react";
import "./App.css";
import "./index.css";
import ProjectMain from "./components/project/ProjectMain"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
function Project() {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
      setsidebarOpen(true);
    };
    const closeSidebar = () => {
      setsidebarOpen(true);
    };
    return (
      <div className="contain">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} name="Latest Completed Project"/>
        <ProjectMain/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    );
}

export default Project
