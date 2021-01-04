import React, { useState, useContext } from 'react'

import AuthContext from '../auth/AuthContext'
import Header from '../components/Header'
import Search from '../components/SearchBar'
import Activity from '../components/Activity'

import '../styles/ToDoList.css';

const data = [
    {
        key:1,
        activity:"workout"
    },
    {
        key:2,
        activity:"run"
    },
    {
        key:3,
        activity:"burn"
    }

]

const ToDoList = () => {
    const [ toDo, setToDo ]=useState(data)
    const [ search, setSearch ] = useState("")
    const [ addToDo, setAddToDo ] = useState("")
    const [ showAdd, setShowAdd ] = useState(false)
    const {setUser} = useContext(AuthContext)

    const logout = () =>{
        setUser(false)
        localStorage.clear()
    }

    const addTodoHandler = () =>{
        const newArr =[...toDo,{key:toDo.length+1, activity:addToDo}]
        setToDo(newArr)
        setShowAdd(false)
    }
    
    const editHandler = (key,newEl) =>{
        const el = toDo.find(el=>el.key===key)
        el.activity=newEl
        const newArray=[...toDo]
        setToDo(newArray)
    }
    
    const deleteHandler = obj =>{
        const newArr=toDo.filter(el=>el.key!==obj)
        setToDo(newArr)
    }

    const displayToDo = () => {
        const filteredToDo = toDo.filter(el=>el.activity.toLowerCase().includes(search.toLowerCase()))
        return filteredToDo.map(el=>
            <Activity
                key={el.key}
                currentId={el.key}

            >{el.activity}
            </Activity>
            )
    }
    console.log(showAdd)
    return(
        <div>
            <Header>To Do List</Header>
            <Search search={search} setSearch={setSearch} setShowAdd={setShowAdd} showAdd={showAdd}/>
            <Activity></Activity>
            <div className="listContainer">
                {displayToDo()}
            </div>
            <button type='button' className='logout' onClick={()=>logout()}>Logout</button>
        </div>
    )
}

export default ToDoList