import React, { useContext } from 'react'

import AuthContext from '../auth/AuthContext'
const ToDoList = () => {
    const {setUser} = useContext(AuthContext)
    
    return(
        <button type='button' className='logout' onClick={()=>setUser(false)}>Logout</button>
    )
}

export default ToDoList