import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons'

const Activity = ({ children, editHandler, deleteHandler })=>{
    const [ open, useOpen ] = useState(false)
    return(
        <div className='insidebox'>
            <div className="activity">
                {children}
            </div>
            <div className="iconbox">
                <FontAwesomeIcon className='icon' onClick={()=>editHandler()} icon={faPenAlt}/>
                <FontAwesomeIcon className='icon' onClick={()=>deleteHandler()} icon={faTrash}/>
            </div>
        </div>
    )
}

export default Activity