import React from 'react'
import './pagesCSS/Login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState() 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/Login',{email, password})

        .then(result=> {console.log(result)
            if(result.data=== "Success!")
            {
                localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('usermail', email); 
                // alert("Login Successfully")
                Swal.fire({
                    title: "Login Successfully",
                    icon: "success",
                    draggable: true
                  });
                navigate('/home')
            }
            if(result.data === "The password is incorrect"){
                // alert("The password is incorrect")
                Swal.fire({
                    icon: "error",
                    title: "The password is incorrect",
                    text: "Try Again",
                    
                  });
            }
            if(result.data === "No record Existed"){
                // alert("No record Existed")
                Swal.fire({
                    icon: "error",
                    title: "No record Existed",
                    
                    
                  });
            }
         
        
        })
        .catch(err=> console.log(err))
       
    }

    return (
        <div className='login-page'>
            <form  onSubmit={handleSubmit}>
                <div className="login-container">
                    <h1>LOGIN</h1>

                    <div className="login-fields">
                        <input type="email" placeholder='Enter your Email-Id' required  onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder='Password' required  onChange={(e) => setPassword(e.target.value)}/>
                        <button type='submit'>Login</button>
                        <button type='reset'>Reset</button>
                    </div>
                </div>
            </form>
            <div className="section02">
                <h1>FRESH-MART</h1>
                {/* { <p>ಏನ್ರೀ ಮೀಡಿಯಾ..!</p> } */}
            
                
            </div>
            
        </div>
    )
}

export default Login
