import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../component/Header/Header'
import TicTacToe from '../component/TicTacToe/TicTacToe'

import MainTodoList from '../component/TodoList/MainTodoList'

export default function AllRoutes() {
  return (
    <div>
   <Switch>  
<Route exact path="/">
    <MainTodoList />
</Route>
<Route exact path="/game">
    <TicTacToe />
</Route>
<Route >
    <Header currentScreen={"Oh Something Went Wrong"}/>
    
</Route>
</Switch>   
    </div>
  )
}
