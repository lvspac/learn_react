import React from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import TodoList from './todos/TodoList'


const App =()=> (
    <div className="App">

        <h1>Hello hii</h1>
        <TodoList/>
    </div>
)

export default hot(module)(App);