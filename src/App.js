import React, { useState, useEffect } from 'react'

import './styles/App.css';
import AuthContext from './auth/AuthContext'
import LoginPage from './pages/LoginPage.js'
import TodoList from './pages/TodoList.js'

function App() {
  
  const [ user, setUser ] = useState(false)
  const localData = JSON.parse(localStorage.getItem("data") || "[]");

  const validUser = () =>{
    const storedUser = localStorage.getItem("data")
    if(storedUser) setUser(storedUser)
  }

  useEffect(()=>{
    validUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <div className="app">
        {user ? <TodoList incoming={localData}/> : <LoginPage/>}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

//{user ? <TodoList/> : <LoginPage/>}