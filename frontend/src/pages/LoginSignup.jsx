import React, { useState } from 'react'
import './pagesCSS/LoginSignup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function LoginSignup  ()  {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/register',{name, email, password})
        .then(result=> {console.log(result)
            if(result.data === 'Registered') {
                // alert("Registered Successfully")
                Swal.fire({
                                    title: "Registered Successfully",
                                    icon: "success",
                                    draggable: true
                                  });
                navigate('/login')
            }
            if(result.data === "Email-id is already registered")
            {
                // alert("Email-ID is allready registered")
                 Swal.fire({
                                    icon: "error",
                                    title: "Email-id is already registered",
                                    text: "Try Again",
                                    
                                  });
            }
           
        })
        .catch(err=> console.log(err))
        
    }

    return (
        <div className='loginsignup'>
            <form onSubmit={handleSubmit}>

            <div className="loginsingup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' required onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder='Email Address' required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                   
                <button type='submit'>Register</button>

                <p className="loginsignup-login">Already have an account? &nbsp;&nbsp;<a href='/Login'>Login Here</a></p>
                
            </div>
            </form>

            <div className="section002">
                <h1>FRESH-MART</h1>
                {/* <p>ಏನ್ರೀ ಮೀಡಿಯಾ..!</p>
             */}
                
            </div>
            
        </div>
    )
}

export default LoginSignup
