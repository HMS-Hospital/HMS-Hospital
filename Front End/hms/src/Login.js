import React, { useState } from 'react';
import './login.css';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

//import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Header';

function Login()
{

    var [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
    var navigate = useNavigate();
    var onSubmit = () => {
        fetch("http://localhost:7070/user/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDetails),
        }).then(data => {
            return data.json()
        }).then(result => {
            debugger;
            if (result.role == "PATIENT") {
                sessionStorage.setItem("id", result.id);
                sessionStorage.setItem("username", result.username);
                sessionStorage.setItem("name", result.name);
                sessionStorage.setItem("type", result.type);
                sessionStorage.setItem("gender", result.gender);
                sessionStorage.setItem("address", result.address);
                sessionStorage.setItem("dob", result.dob);
                sessionStorage.setItem("state", result.state);
                sessionStorage.setItem("city", result.city);
                sessionStorage.setItem("pincode", result.pincode);
                sessionStorage.setItem("mobileno", result.mobileNo);
                sessionStorage.setItem("emailid", result.emailid);
                sessionStorage.setItem("isLoggedIn", "true");
                console.log(result)
                navigate("/patient/profile")
            }
            else{
                sessionStorage.setItem("id", result.id);
                sessionStorage.setItem("username", result.username);
                sessionStorage.setItem("name", result.name);
                sessionStorage.setItem("specialization", result.specialization);
                sessionStorage.setItem("gender", result.gender);
                sessionStorage.setItem("joinDate", result.joinDate);
                sessionStorage.setItem("dob", result.dob);
                sessionStorage.setItem("mobileno", result.mobileNo);
                sessionStorage.setItem("emailid", result.emailid);
                sessionStorage.setItem("isLoggedIn", "true");
                console.log(result)
                navigate("/doctor/profile")
            }

        });
    }

    var handleChange = (args) => {
        var updatedDetails = { ...loginDetails };
        updatedDetails[args.target.name] = args.target.value;
        setLoginDetails({ ...updatedDetails })
    }

    const signin = () => {
      navigate("/Register")
  }


  return (
    <>
        <div className="login-container">
      <div className="login-title">
        {/* <h1 style={{color:'black'}}>Hospital Management System</h1>  */}
      </div>
      <div className="login-form-container">
        <div className="login-form">
            <center>
           <img src="data:image/png;base64,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"
           style={{width:"100px"}}>
           </img>
           
          <h1 style={{color:'black'}}>Login</h1></center>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
                                     <input type={"text"} name="username" value={loginDetails.username} placeholder="Enter Your Username" onChange={handleChange} className="form-control"></input>

            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
                                    <input type={"password"} name="password" value={loginDetails.password} placeholder="Enter Your password" onChange={handleChange} className="form-control"></input>

            </div>
            <input type={"button"} value="Login" className="btn btn-primary" onClick={onSubmit} />
            <p>Don't have account?</p>
            <button type="submit" onClick={signin}>Register</button>
          </form>
        </div>
      </div>
    </div>
    </>
  

  );
};

export default Login;