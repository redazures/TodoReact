import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Bar = ({ value, changeValue, setShowAdd, showAdd, name, addToDoHandler, id })=>(
    <div className='insidebox' id={`${name}InsideBox`}>
        <div className="inputbox" id={`${name}bar`}>
            { id ? null : <FontAwesomeIcon className='icon' icon={faSearch}/> }
            <input
                type='text'
                placeholder={ name }
                className={ `${name}Input` }
                maxLength={25}
                name={ name }
                value={ value } 
                onChange={ e => changeValue(e.target.value) }
            />
        </div>
        <button type='button' className='toggle' id={id ? "save" : null}
            onClick={id ? ()=>addToDoHandler() : ()=>setShowAdd(!showAdd) } 
        >
            {id ? "Save" : showAdd ? "Axe" : "New"}
        </button>
    </div>
)

export default Bar