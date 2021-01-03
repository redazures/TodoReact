import React,{ useState, useContext } from 'react'
import { Form } from 'react-final-form'
import { faUser, faLock, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

import AuthContext from '../auth/AuthContext.js'
import emailValidation from '../configs/emailvalidation'
import IconField from '../components/IconField.js'
import Header from '../components/Header.js'
import postUser from '../api/login'

import '../styles/LoginPage.css';

const validate = values =>{
    const errors = {}

    if(!values.email){
        errors.email = "Email field cannot be empty"
    }else if (values.email.length>50){
        errors.email = "Email cannot be more than 50 characters"
    }else if (!emailValidation(values.email)){
        errors.email = "Email is invalid."
    }

    if(!values.password){
        errors.password = "Password field cannot be empty"
    }else if (values.password.length < 4 || values.password.length>16){
        errors.password ='Password should be between 4 and 16 characters'
    }

    return errors
}

const LoginPage = () => {
    const { setUser } = useContext(AuthContext)
    const [error, setError] = useState(false);

    library.add( faUser, faLock, faCoffee,)

    const handleSubmit = async values => {
        const response = await postUser(values)
        if (!response.ok) return setError(response.data.message)
        localStorage.setItem("user",response.data)
        setError(false)
        setUser(response.data)
    }   

  return(
    <>
      <Header>Rappter Labs</Header>
      <Form 
        onSubmit={handleSubmit}
        validate={validate}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="loginform">
            <IconField name="email" placeholder="user@rapptr.labs.com" icon="user"/>
            <IconField name="password" type='password' placeholder="password" icon="lock"/>
            <button type="submit" id="loginButton" className={props.pristine ? "pristine" : "notPristine" } disabled={props.submitting}>Login</button> 
            <div className="spaceHolder">{error && (<span className='errorMessage'>{error ? error : null}</span>)}</div>
            <pre>{JSON.stringify(props.values,0,2)}</pre>
          </form>
        )}
      </Form>
    </>
  )
}

export default LoginPage