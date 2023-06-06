import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Popup from 'reactjs-popup';
import '../styles/modal.module.css';
import 'reactjs-popup/dist/index.css';
import { Button } from "@mui/material";
import Modal from "@mui/material";

export default function SideBar() {
    return (
        <Sidebar>
            <Menu>
                <MenuItem>
                    <Popup trigger={<Button className="button">Create Chart</Button>} modal nested>
                        <div className="modal">
                            <div className="header"> Modal Title </div>
                            <div className="content">
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut ornare. Molestie a iaculis at erat pellentesque adipiscing. Morbi non arcu risus quis varius. Aenean et tortor at risus viverra. Nunc sed velit dignissim sodales ut. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Consequat interdum varius sit amet. Ac turpis egestas maecenas pharetra convallis posuere morbi. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Accumsan tortor posuere ac ut consequat semper. Felis bibendum ut tristique et.
                            <br />
                            Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Diam ut venenatis tellus in metus. Netus et malesuada fames ac turpis egestas. Viverra justo nec ultrices dui sapien. Ultricies leo integer malesuada nunc vel risus. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Urna et pharetra pharetra massa massa ultricies mi. Ultrices eros in cursus turpis. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Mattis aliquam faucibus purus in. Ultrices gravida dictum fusce ut placerat. Urna nec tincidunt praesent semper feugiat nibh sed. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Facilisis sed odio morbi quis commodo odio aenean. Vel pretium lectus quam id leo.
                            </div>
                        </div>
                    </Popup>
                </MenuItem>
                <MenuItem>
                    <Button>Create Dashboard</Button>
                </MenuItem>
            </Menu>
        </Sidebar>

    )
}