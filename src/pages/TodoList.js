import React, { useContext } from 'react'

import AuthContext from '../auth/AuthContext'
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