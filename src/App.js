import React, { useState, useEffect } from 'react'

import './styles/App.css';
import AuthContext from './auth/AuthContext'
import LoginPage from './pages/LoginPage.js'
import TodoList from './pages/TodoList.js'

function App() {
  
  const [ user, setUser ] = useState(false)
  const storedUser = localStorage.getItem("user")

  const validUser = () =>{
    const storedUser = localStorage.getItem("user")
    if(storedUser) setUser(storedUser)
  }

  useEffect(()=>{
    validUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <div className="app">
        {user ? <TodoList/> : <LoginPage/>}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

//{user ? <TodoList/> : <LoginPage/>}