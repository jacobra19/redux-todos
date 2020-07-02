import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core";

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

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                {renderImage()}
                {renderTitle()}
            </Toolbar>
        </AppBar>
    )
}

export default TopBar