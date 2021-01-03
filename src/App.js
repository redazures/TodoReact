import React, { useState } from 'react'


import './styles/App.css';
import AuthContext from './auth/AuthContext'
import LoginPage from './pages/LoginPage.js'
import TodoList from './pages/TodoList.js'

function App() {
  
  const [ user, setUser ] = useState(false)
  console.log(user)
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <div className="App">
        {user ? <TodoList/> : <LoginPage/>}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

//{user ? <TodoList/> : <LoginPage/>}