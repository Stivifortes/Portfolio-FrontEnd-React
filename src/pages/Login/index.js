import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './style.css'
import Layout from '../../components/Layout'

export default function Login() {
    const history = useHistory();
    const myEmail = "stiven.forte@gmail.com";
    const myPassword = "1234"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if (myEmail == email & myPassword == password) {
            history.push('/admin')
        }else{
            console.log('not correct')
        }
    }
    return (
        <Layout>
            <div className='loginContainer'>
            <div className="myform">
                <form>
                  <h2 className='loginTitle'>Login</h2>
                  <br/>
                  <br/>
                  <p>Email:</p>
                  <input
                    onChange={handleEmail}
                    type="text"
                    placeholder="Email"
                  />
                  <br/>
                  <br/>
                  <p>Password:</p>
                  <input
                   onChange={handlePassword}
                    type="password"
                    placeholder="Password"
                  />
                  <br/>
                  <br/>
                  <button type='submit' onClick={handleSubmit}>Login</button>
                  <p>{email}</p>
                </form>
              </div>
            </div>
        </Layout>
    )
}
