import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './style.css'

import Layout from '../../components/Layout'
import LoginForm from '../../components/LoginForm'

export default function Login() {
    const history = useHistory();
    const myUser = "stiven";
    const myPassword = "1234"
    const [username, setUSername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) =>{
        setUSername(event.target.value)
        console.log('User:',event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
        console.log('Pass:',event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if (myUser == username & myPassword == password) {
            history.push('/admin')
        }else{
            console.log('not correct')
        }
    }
    return (
        <Layout>
            <div className='loginContainer'>
                <div>
                <h2 className='loginTitle'>Login</h2>
                <div>
                    <LoginForm 
                    handlePassword={handlePassword} 
                    handleUsername={handleUsername} 
                    handleSubmit={handleSubmit}/>
                </div>
                </div>
            </div>
        </Layout>
    )
}
