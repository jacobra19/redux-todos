import React from 'react'
import { connect } from "react-redux";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import reduxLogo from "../assets/redux.png";

import ActionMenu from "./ActionMenu";

const TopBar = (props) => {

    const renderImage = () => {
        return (
            <img src={reduxLogo} style={{
                filter: "invert(1) grayscale(1) brightness(500)",
                height: 18,
                marginRight: 10,
                // transition: `all .8s ease-in-out`,
                // '&:hover': {
                //     transform: `rotate(360deg)`
                // }
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
            <Toolbar variant="dense" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {renderImage()}
                    {renderTitle()}
                </div>
                <ActionMenu/>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;