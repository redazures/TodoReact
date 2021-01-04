import React, { useState, useContext, useEffect } from 'react'

import AuthContext from '../auth/AuthContext'
import Header from '../components/Header'
import Bar from '../components/Bar'
import Activity from '../components/Activity'

import '../styles/ToDoList.css';

const ToDoList = ({ incoming }) => {
    const [ toDo, setToDo ]=useState(incoming)
    const [ search, setSearch ] = useState("")
    const [ addToDo, setAddToDo ] = useState("")
    const [ showAdd, setShowAdd ] = useState(false)
    const  { setUser } = useContext(AuthContext)

    const logout = () =>{
        setUser(false)
        localStorage.clear()
    }

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(toDo)); 
      }, [toDo])

    const addToDoHandler = () =>{
        if(addToDo.length<1) return setShowAdd(false)
        const newArr =[...toDo,{key:toDo.length+1, activity:addToDo}]
        setToDo(newArr)
        setAddToDo("")
        setShowAdd(false)
    }
    
    const editHandler = obj =>{
        if(obj.activity.length<1) return
        const el = toDo.find(el=>el.key===obj.key)
        el.activity=obj.activity
        const newArray=[...toDo]
        setToDo(newArray)
    }
    
    const deleteHandler = id =>{
        const newArr=toDo.filter(el=>el.key!==id)
        setToDo(newArr)
    }

    const displayToDo = () => {
        const filteredToDo = toDo.filter(el=>el.activity.toLowerCase().includes(search.toLowerCase()))
        return filteredToDo.map(el=>
            <Activity
                key={el.key}
                id={el.key}
                deleteHandler={deleteHandler}
                editHandler={editHandler}

            >{el.activity}
            </Activity>
            )
    }

    return(
        <div>
            <Header>To Do List</Header>
            <div className='border'>
                <Bar name="search" value={search} changeValue={setSearch} setShowAdd={setShowAdd} showAdd={showAdd}/>
                {showAdd ? <Bar name="activity" value={addToDo} changeValue={setAddToDo} addToDoHandler={addToDoHandler} id={toDo.length+1}/> : null}
                <div className="listContainer" id={showAdd ? "listContainerShort" : null} >
                    {displayToDo()}
                </div>
                <button type='button' className='logout' onClick={()=>logout()}>Logout</button>
            </div>
        </div>
    )
}

export default ToDoList