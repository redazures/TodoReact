import React,{ useContext } from 'react'
import { Form } from 'react-final-form'
import { faUser, faLock, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';

import AuthContext from '../auth/AuthContext.js'
import IconField from '../components/IconField.js'
import emailValidation from '../configs/emailvalidation'
import Header from '../components/Header.js'
import '../styles/LoginPage.css';

const onSubmit = values => {
    console.log("works", values)
    var formData = new FormData()
    formData.append('email', values.email)
    formData.append('password', values.password)

    console.log("works", formData.get("email"), formData.get("password"))

    axios({
        method: 'post',
        url: 'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
        headers: {
          'Content-type': 'multipart/form-data'
        },
        data: formData,
      }).then(rs=>{
          console.log(rs)
      }).catch(err=>{
          console.log(err)
      })

    
    console.log("works here at the bottom")
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