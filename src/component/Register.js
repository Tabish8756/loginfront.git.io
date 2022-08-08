import {useState} from 'react'
import axios from 'axios'
const Register=()=>{
   
    const [user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
        })

    const handleChange=(e)=>{
        const {name, value}=e.target
        setUser({
            ...user,[name]:value
        })
    }


    const handleRegister=(e)=>{
        const{name, email, password, reEnterPassword}=user
        if(name && email && (password===reEnterPassword)){
            axios.post("http://localhost:4000/register", user)
            .then((res)=>{
                console.log(res)
            })
        }
        else{
            alert("inavlid Input")
        }
       e.preventDefault();
        console.log(user)
    }
    return (
        <div>
    <input type="text" name="name" placeholder="Enter the name" value={user.name} onChange={handleChange}></input><br />
    <input type="email" name="email" placeholder="Enter the Email"value={user.email} onChange={handleChange}></input><br />
    <input type="password"  name="password" placeholder="Enter the password" value={user.password} onChange={handleChange}></input><br />
    <input type="password" name="reEnterPassword" placeholder="Enter the password Again" value={user.reEnterPassword} onChange={handleChange}></input><br />
    <button onClick={handleRegister}>Submit</button>
        </div>
    )
}
export default Register;