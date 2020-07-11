import React from 'react';
import { connect } from "react-redux";

import { IconButton, Popper, Paper, Badge, ClickAwayListener, MenuList, MenuItem, Divider, Typography } from "@material-ui/core";
import BeenhereIcon from '@material-ui/icons/Beenhere';

const ActionMenu = (props) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <IconButton size={'small'}
                disabled={props.todos.length ? false : true}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle} >
                <Badge badgeContent={props.todos.length} color="secondary">
                    <BeenhereIcon style={{ fontSize: 20, color: 'white' }} />
                </Badge>
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow">
                            <div style={{ padding: '0px 16px' }}>
                                <Typography>Mark all todos as: </Typography>

                            </div>
                            <Divider />
                            <MenuItem dense onClick={handleClose}>Complete</MenuItem>
                            <MenuItem dense onClick={handleClose}>Uncomplete</MenuItem>
                            <MenuItem dense onClick={handleClose}>Delete</MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </div>
    );
}



const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(ActionMenu);
