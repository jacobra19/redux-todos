import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import { Container } from "@material-ui/core";

const MainContainer = () => {
    return (
        <Container  maxWidth="xs" 
                    style={{ 
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 
                        'center', 
                        flexDirection: 
                        'column',marginTop:20 
                    }}
        >
            <AddTodo />
            <VisibleTodoList />
        </Container>
    )
}

export default MainContainer