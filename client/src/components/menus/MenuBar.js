import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/MeetingRoom";


const MenuBar = () => {

    return (
        <div className="menu-bar">

            <Link className="btn menu-btn" to="/" title="Home">
                <HomeIcon />
            </Link>

            <DropDownMenu />

            {/* <a
                className="btn menu-btn"
                href={"/auth/logout"}
                title="Logout"
                style={{ float: "right" }}
            >
                <LogoutIcon />
            </a> */}
        </div>
    );
};

export default MenuBar;