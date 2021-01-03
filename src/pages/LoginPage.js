import React,{ useContext } from 'react'
import { Form } from 'react-final-form'
import { faUser, faLock, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';


import AuthContext from '../auth/AuthContext.js'
import IconField from '../components/IconField.js'
import emailValidation from '../configs/emailvalidation'
import Header from '../components/Header.js'
import api from '../api/api'
import '../styles/LoginPage.css';

const onSubmit = values => {
    const obj ={
        // email:values.email,
        // password:values.password
        email:"test@rapptrlabs.com",
        password:"1234"
    }

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(obj)
    }
    console.log("works", obj)
    fetch(api, options).then(rs=>rs.json()).then(data=>console.log(data))
    console.log("works here", obj)
}   

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
  library.add( faUser, faLock, faCoffee,)

  const addUser = values =>{
    onSubmit(values)
    // setUser(true)
    // localStorage.setItem("user",true)
}
  return(
    <>
      <Header>Rappter Labs</Header>
      <Form 
        onSubmit={addUser}
        validate={validate}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="loginform">
            <IconField name="email" placeholder="user@rapptr.labs.com" icon="user"/>
            <IconField name="password" type='password' placeholder="password" icon="lock"/>
            <button type="submit" id="loginButton" className={props.pristine ? "pristine" : "notPristine" } disabled={props.submitting}>Login</button> 
            <pre>{JSON.stringify(props.values,0,2)}</pre>
          </form>
        )}
      </Form>
    </>
  )
}

export default LoginPage