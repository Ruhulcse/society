import React from 'react'
import brand from "../../assets/img/lg.png"
function Sidebar() {
    return (
        <>
          <nav id="sidebar">
            <div class="sidebar-header">
                <img src={brand}  className="img-fluid" alt="not found"/>
            </div>

            <ul class="list-unstyled components">
                <li>
                    <a href="!#">About</a>
                </li>
                <li>
                    <a href="!#">new project</a>
                </li>
                <li>
                    <a href="!#">Chat Room</a>
                </li>
                <li>
                    <a href="!#">Users</a>
                </li>
                <li>
                    <a href="!#">Proposal</a>
                </li>
                <li>
                    <a href="!#">Settings</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Sidebar
