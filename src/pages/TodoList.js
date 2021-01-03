import React, { useContext } from 'react'

import AuthContext from '../auth/AuthContext'

import '../styles/ToDoList.css';

const ToDoList = () => {
    const {setUser} = useContext(AuthContext)

    const logout = () =>{
        setUser(false)
        localStorage.clear()
    }

    return(
        <button type='button' className='logout' onClick={()=>logout()}>Logout</button>
    )
}

export default ToDoList