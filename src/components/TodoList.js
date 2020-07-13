import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Typography, MenuList, Divider, Tooltip, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ activeTodos, completeTodos, toggleTodo,deleteTodo }) => {

    const renderTodo = (todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={()=>deleteTodo(todo.id)}/>
    )

    const renderSection = (title, todos) => {

        return (
            <div style={{}}>
                {renderSectionTitle(title, todos.length)}
                <Divider light={true} />
                <MenuList >

                    {todos.map(renderTodo)}
                </MenuList>
            </div>
        )
    }

    const renderSectionTitle = (title, todosLength) => {
        let isEmptySection = !todosLength
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant={'h5'} style={{ fontWeight: 500 }}>{title}</Typography>
                { isEmptySection ? null : renderDeleteSection(title) }
            </div>
        )
    }

    const renderDeleteSection = (title) => {
        return (
            <Tooltip title={`Delete All ${title}`}>
                <IconButton aria-label="delete" size={'small'}>
                    <DeleteIcon style={{ fontSize: 20 }} />
                </IconButton>
            </Tooltip>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            {renderSection('Active', activeTodos)}
            {renderSection('Complete', completeTodos)}
        </div>
    )
}

TodoList.propTypes = {
    activeTodos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,

    completeTodos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList