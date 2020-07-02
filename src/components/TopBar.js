import React from 'react'
import { AppBar, Toolbar, Typography,Badge } from "@material-ui/core";
import BeenhereIcon from '@material-ui/icons/Beenhere';

import reduxLogo from "../assets/redux.png";

const TopBar = () => {

    const renderImage = () => {
        return (
            <img src={reduxLogo} style={{
                filter: "invert(1) grayscale(1) brightness(500)",
                height: 18,
                marginRight: 10,
            }} />
        )
    }

    const renderTitle = () => {

        return (
            <Typography variant="h6" color="inherit">
                Redux Todos
            </Typography>
        )
    }

    const renderBadge = () => {

        return (
            <Badge badgeContent={4} color="secondary">
                <BeenhereIcon style={{fontSize:20}}/>
            </Badge>
        )
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    {renderImage()}
                    {renderTitle()}
                </div>
                {renderBadge()}
            </Toolbar>
        </AppBar>
    )
}

export default TopBar