import React from "react";
import {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import "../../src/App.css";

const LoginComponent = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState(undefined);
    const history = useHistory();

    useEffect(()=>{
        const base64 = localStorage.getItem('credentialsBase64')
           if(base64){
               history.push('/profile')
           }
    })

    const login = async() =>{
        const base64EmailAndPassword = btoa(email + " : " + password);

        const resp = await fetch("http://localhost:3002/users", {
            headers:{
                Authorization: "Basic dXNlcjM6blo0dUZkOWhCcDNkdktMdQ==" + base64EmailAndPassword
            }
        })
        if(resp.ok){
            localStorage.setItem('credentialsBase64', base64EmailAndPassword)
            history.push('/profile')
        }
    };

    return(
        <div className="App">
            <header className="App-header">
                <input 
                   type="text"
                   placeholder="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   > </input>
                <input
                   type="password"
                   placeholder="**********"
                   value={password}
                   onChange={(e)=> setPassword(e.target.value)}
                   ></input>
                <input type="button" onClick={login} value="Login"></input>

                {error && <h2> {error} </h2>}
            </header>
        </div>
    )
}

export default LoginComponent;