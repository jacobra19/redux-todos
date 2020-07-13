import { v4 as uuid } from 'uuid';

const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.id
            )
        
        case 'COMPLETE_ALL':
            return state.map(todo => {
                return { ...todo, completed: true }
            })
        case 'ACTIVATE_ALL':
            return state.map(todo => {
                return { ...todo, completed: false }
            })
        case 'DELETE_ALL':
            return initialState


        default:
            return state
    }
}

export default todos