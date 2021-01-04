import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const Activity = ({ children, editHandler, deleteHandler, id})=>{
    const [ select, setSelect ]= useState(false)
    const [ activity, setActivity ] = useState("")

    console.log(activity)
    return(
        <div className='insidebox'>
            { select 
                ? 
                <div className="inputbox" id="activitybar">
                    <input
                        type='text'
                        className="activityInput"
                        maxLength={25}
                        name="activity"
                        value={activity}
                        onChange={(e)=>setActivity(e.target.value)}
                    />
                </div> 
                :
                <div className="activity">
                    {children}
                </div>
            }
            { select ? 
                <button type='button' className='toggle' id="save"
                    onClick={()=>{
                        editHandler({key:id,activity:activity})
                        setSelect(false)
                    }} 
                >
                    Save
                </button>
                :
                    <div className="iconbox">
                        <FontAwesomeIcon onClick={()=>{
                            setSelect(true)
                            setActivity(children)
                            }} icon={faPencilAlt} size={'2x'}/>
                        <FontAwesomeIcon onClick={()=>deleteHandler(id)} icon={faTrash} size={'2x'}/>
                    </div>
            }
        </div>
    )
}

export default Activity