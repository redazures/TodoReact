import React from 'react'
import { Field } from 'react-final-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const IconField = ({ name="Input", type='text', placeholder="Placeholder", icon="question"}) => (
    <Field name={name} className="fields">
        {({input, meta})=>{
            return (
                <div>
                    <div>
                        <label htmlFor={name}>{capitalize(name)}</label><br/>
                        <div 
                            style={meta.error && meta.touched ? {borderStyle:"solid",borderColor:"red"} : {borderStyle:"solid",borderColor:"black"}}
                        >
                            <FontAwesomeIcon icon={icon ? ["fa",icon] : faQuestion} />
                            <input
                                {...input}
                                style={{border:0}}
                                type={type}
                                name={name}
                                placeholder={placeholder}
                            />
                        </div>
                    </div>
                    <div>{meta.error && meta.touched && (<span className='errorMessage'>{meta.error}</span>)}</div>
                </div>
            )
        }}
    </Field>
)

export default IconField