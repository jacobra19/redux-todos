import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import { styled } from '@material-ui/core/styles';

import reduxLogo from "./assets/redux.png";

import { AppBar, Container as MuiContainer, Typography, Toolbar } from "@material-ui/core";

const Container = styled(MuiContainer)`

    background-color:red;
`

const App = () => (
    <div style={{}}>
        <AppBar position="static">
            <Toolbar variant="dense">
                <img src={reduxLogo} style={{
                    filter: "invert(1) grayscale(1) brightness(500)",
                    height: 18,
                    marginRight: 10,
                }} />
                <Typography variant="h6" color="inherit">
                    Redux Todos
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="xs" > 
        {/* // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}> */}
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </Container>
    </div>
)

export default App