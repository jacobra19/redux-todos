import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    activeTodos: getVisibleTodos(state.todos, VisibilityFilters.SHOW_ACTIVE),
    completeTodos: getVisibleTodos(state.todos, VisibilityFilters.SHOW_COMPLETED)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)