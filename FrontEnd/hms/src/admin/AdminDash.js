// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
// import Header from './Header';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function AdminDash() 
{
  var [username, setUsername] = useState({ id:0,username:""});

  useEffect(() => {
      var copyOfUser = { ...username };
      console.log(copyOfUser);
      copyOfUser["id"]=parseInt(sessionStorage.getItem("id"));
      copyOfUser["username"] = sessionStorage.getItem("username");
      // copyOfUser["specialization"] = sessionStorage.getItem("specialization");
      // copyOfUser["gender"] = sessionStorage.getItem("gender");
      // copyOfUser["dob"] = sessionStorage.getItem("dob");
      // copyOfUser["mobileNo"] = sessionStorage.getItem("mobileno");
      // copyOfUser["emailid"] = sessionStorage.getItem("emailid");
      // copyOfUser["joinDate"] = sessionStorage.getItem("joinDate")
      setUsername({ ...copyOfUser })
  }, []);

  return<>
  <div className='card' style={{ boxShadow: "0px 0px 5px grey" }}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='card-title'>Information</h3>
                    </div>
                </div>
                <hr></hr>
                
            </div>
        </div>
        </>
  
  };
  
  export default AdminDash;

  