import React, { useState } from 'react'
import { Form, FormGroup, FormFeedback,Label,Button,Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = ({setIsLoggedIn}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [isValidUsername,setIsValidUsername]=useState(null)
    const [isValidPassword,setIsValidPassword]=useState(null)

    const handleCheckUsername=()=>{
        console.log(username,import.meta.env.VITE_USERNAME);
        username==import.meta.env.VITE_USERNAME ? setIsValidUsername(true) : setIsValidUsername(false)
    }
    const handleLogin=()=>{
        if(password==import.meta.env.VITE_PW){
            setIsValidPassword(true)
                    console.log('successfully logged in');
                    setIsLoggedIn(true)
    } else setIsValidPassword(false)
    }
  return (
    
<Form className='login border p-5 rounded'>
    <FormGroup>
    <Label for="username">Username:</Label>
    <Input id="username" autoFocus 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    onBlur={handleCheckUsername}
    className={isValidUsername==null ? '' : (isValidUsername ? 'is-valid' : 'is-invalid')}
    />
    <FormFeedback > Oh no, incorrect username! </FormFeedback>
    </FormGroup>

    <FormGroup>
    <Label for="password">Password:</Label>
    <Input id="passwod" type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className={isValidPassword==null ? '' : (isValidPassword ? 'is-valid' : 'is-invalid')}
    />
    <FormFeedback > Oh no, incorrect password! </FormFeedback>
    </FormGroup>

    <div>
  <Button type="button" color="primary"
  onClick={handleLogin}
  disabled={!password || !isValidUsername}>
    Login</Button>
</div>
</Form>

)
}

