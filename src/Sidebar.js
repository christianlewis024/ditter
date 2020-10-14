import React from 'react'
import "./Sidebar.css"
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from "./SidebarOption"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"


function Sidebar() {
    return (
        <div className="sidebar">
           <h2>i am the sidebar</h2> 
          
           <TwitterIcon/>

           <SidebarOption Icon={HomeIcon} text="home"/>
           <SidebarOption Icon={SearchIcon} text="explore"/>
           <SidebarOption Icon={NotificationsNoneIcon} text="notifications"/>
           
           {/* button -> tweet */}
           
        </div>
    )
}

export default Sidebar
