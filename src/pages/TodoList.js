import React, { useContext } from 'react'

import AuthContext from '../auth/AuthContext'

import '../styles/TodoList.css';

const ToDoList = () => {
    const {setUser} = useContext(AuthContext)

    const logout = () =>{
        setUser(false)
        localStorage.removeItem('user')
    }

    return(
        <button type='button' className='logout' onClick={()=>logout()}>Logout</button>
    )
}

export default ToDoList