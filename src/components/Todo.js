import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox, Typography, ListItem, Fade, IconButton, Tooltip } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ onClick, onDelete, completed, text }) => (
    <Fade in={true}>
        <ListItem style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox checked={completed}
                    color={completed ? "default" : "primary"}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onClick={onClick}
                />
                <Typography style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {text}
                </Typography>

            </div>
            <Tooltip title={`Delete Todo`}>


                <IconButton size={'small'}
                    onClick={onDelete} >
                    <DeleteIcon style={{ fontSize: 20 }} />
                </IconButton>
            </Tooltip>

        </ListItem >
    </Fade>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo