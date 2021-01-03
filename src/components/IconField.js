import React from 'react'
import { Field } from 'react-final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

import '../styles/IconField.css'
const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const IconField = ({ name="Input", type='text', placeholder="Placeholder", icon="question"}) => (
    <Field name={name} >
        {({input, meta})=>{
            return (
                <div className='inputsContainer'>
                    <div>
                        <label htmlFor={name} className='labels'>{capitalize(name)}</label><br/>
                        <div className='inputbox'
                            style={meta.error && meta.touched ? {borderStyle:"solid",borderColor:"red"} : {borderStyle:"solid",borderColor:"black"}}
                        >
                            <FontAwesomeIcon className='icon' icon={icon ? ["fa",icon] : faQuestion}/>
                            <input
                                {...input}
                                className='IconFieldInput'
                                type={type}
                                name={name}
                                placeholder={placeholder}
                            />
                        </div>
                    </div>
                    <div className="spaceHolder">{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                </div>
            )
        }}
    </Field>
)

export default IconField