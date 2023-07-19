import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button, Box, FormControl, InputLabel, Select } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ShapeLine, Edit } from "@mui/icons-material";
import '../styles/popup.css';

export default function SideBar({collapsed}) {
    const [shape, setShape] = React.useState('');

    const handleChange = (event) => {
      setShape(event.target.value);
    };

    return (
        <Sidebar collapsed={collapsed}>
            <Menu>
                <MenuItem>
                    <ListItemIcon>
                    <ShapeLine fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText primary="Change Shape" />
                </MenuItem>
                {/* <Popup trigger={
                    <MenuItem className="menuItem">
                        Create Chart
                    </MenuItem>
                } modal nested>
                    <div className="modal">
                        <div className="header">Shape</div>
                        <Box sx={{minWidth: 120}}>
                        <div className="content">
                            <FormControl fullWidth>
                            <InputLabel>Shape</InputLabel>
                            <Select
                                labelId="shape-select-label"
                                id="shape-select"
                                value={shape}
                                label="Shape"
                                onChange={handleChange}
                            >
                                <MenuItem value={"bar"}>Bar</MenuItem>
                                <MenuItem value={"line"}>Line</MenuItem>
                                <MenuItem value={"radar"}>Radar</MenuItem>
                                <MenuItem value={"pie"}>Pie</MenuItem>
                                <MenuItem value={"area"}>Area</MenuItem>
                            </Select>
                            <Button>Add</Button>
                            </FormControl>
                        </div>
                        </Box>
                    </div>
                </Popup> */}
                <MenuItem>
                    Create Dashboard
                </MenuItem>
            </Menu>
        </Sidebar>

    )
}