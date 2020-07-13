import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Input } from '@material-ui/core'


import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo.trim()) return;

        setTodo('')
        dispatch(addTodo(todo))
    }

    return (
        <div style={{width:'100%',marginBottom:30}}>
            <form onSubmit={handleSubmit} autoComplete={"off"} style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                <Input  placeholder="Enter Todo"
                        variant="outlined" 
                        id="todo-input" 
                        label="Todo" 
                        onChange={handleChange} 
                        value={todo} 
                        style={{height:36,marginRight:10,width:'-webkit-fill-available'}}
                />
                <Button type="submit" variant={'contained'} color={'primary'} disabled={!todo.trim()}>Add</Button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)