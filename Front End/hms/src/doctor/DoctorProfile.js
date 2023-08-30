import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios';

function DoctorProfile() {
    var [user, setUser] = useState({ id:0,name: "", specialization: "", gender: "", emailid: "", dob: "", mobileNo: "",joinDate:""});

    useEffect(() => {
        var copyOfUser = { ...user };
        copyOfUser["id"]=parseInt(sessionStorage.getItem("id"));
        copyOfUser["name"] = sessionStorage.getItem("name");
        copyOfUser["specialization"] = sessionStorage.getItem("specialization");
        copyOfUser["gender"] = sessionStorage.getItem("gender");
        copyOfUser["dob"] = sessionStorage.getItem("dob");
        copyOfUser["mobileNo"] = sessionStorage.getItem("mobileno");
        copyOfUser["emailid"] = sessionStorage.getItem("emailid");
        copyOfUser["joinDate"] = sessionStorage.getItem("joinDate")
        setUser({ ...copyOfUser })
    }, []);

    return <div>
        <div className='card' style={{ boxShadow: "0px 0px 5px grey" }}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='card-title'>Information</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>Full Name</h5>
                        <p className='text-muted'>{user.name}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Specialization</h5>
                        <p className='text-muted'>{user.specialization}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Gender</h5>
                        <p className='text-muted'>{user.gender}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>DOB</h5>
                        <p className='text-muted'>{user.dob}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Mobile No</h5>
                        <p className='text-muted'>{user.mobileNo}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Email Id</h5>
                        <p className='text-muted'>{user.emailid}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>
                            Join Date
                        </h5>
                        <p>
                            {user.joinDate}
                        </p>
                    </div>
                </div>
                <br>
                </br>
                
            </div>
        </div>
    </div>

}

export default DoctorProfile;