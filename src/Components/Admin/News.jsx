import { useState } from "react";
import "./App.css";
import "./index.css";
import NewsEditor from "./components/news/NewsEditor"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {Helmet} from "react-helmet";
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
        <Helmet>
        <title>Dashboard || news</title>
      </Helmet>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} name="News"/>
        <NewsEditor/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    );
}

export default Project