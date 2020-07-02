import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


import { Container } from "@material-ui/core";

const MainContainer = () => {
    return (
        <Container maxWidth="xs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </Container>
    )
}

export default MainContainer