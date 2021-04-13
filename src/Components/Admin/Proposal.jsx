import { useState } from "react";
import "./App.css";
import "./index.css";
import Proposel from "./components/proposal/Prop"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const Proposal = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(true);
  };
  return (
    <div className="contain">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} name="Proposal"/>
      <Proposel/>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Proposal;