import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios';

function PatientProfile() {
    var [user, setUser] = useState({ id:0,name: "", type: "", gender: "", emailid: "", dob: "", mobileNo: "", state: "", city: "", address: "", pincode: "" });
    const location = useLocation();
    var previousdata={};
    var [status, setStatus] = useState("display");

    var edit = () => {
        previousdata={...user}
        setStatus("edit");
    }

    var handleChange = (args) => {
        var copyOfUser = { ...user };
        copyOfUser[args.target.name] = args.target.value;
        setUser(copyOfUser);
    }

    var update = () => {
        setStatus("display");
        axios({
            url:"http://localhost:7070/patient/edit",
            method:"put",
            data:user
        }).then((response) => {
            if (response.data == "Profile edited") {
                sessionStorage.setItem("id", user.id);
                sessionStorage.setItem("username", user.username);
                sessionStorage.setItem("name", user.name);
                sessionStorage.setItem("type", user.type);
                sessionStorage.setItem("gender", user.gender);
                sessionStorage.setItem("address", user.address);
                sessionStorage.setItem("dob", user.dob);
                sessionStorage.setItem("state", user.state);
                sessionStorage.setItem("city", user.city);
                sessionStorage.setItem("pincode", user.pincode);
                sessionStorage.setItem("mobileno", user.mobileNo);
                sessionStorage.setItem("emailid", user.emailid);
            }
        }).catch((error)=>{
            console.log(error);
            setUser({...previousdata});
        })
    }

    useEffect(() => {
        var copyOfUser = { ...user };
        copyOfUser["id"]=parseInt(sessionStorage.getItem("id"));
        copyOfUser["name"] = sessionStorage.getItem("name");
        copyOfUser["type"] = sessionStorage.getItem("type");
        copyOfUser["gender"] = sessionStorage.getItem("gender");
        copyOfUser["dob"] = sessionStorage.getItem("dob");
        copyOfUser["mobileNo"] = sessionStorage.getItem("mobileno");
        copyOfUser["emailid"] = sessionStorage.getItem("emailid");
        copyOfUser["state"] = sessionStorage.getItem("state");
        copyOfUser["city"] = sessionStorage.getItem("city");
        copyOfUser["pincode"] = sessionStorage.getItem("pincode");
        copyOfUser["address"] = sessionStorage.getItem("address");
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
                        <p className='text-muted'>{status == "display" ? user.name : <input type={'text'} className='form-control' name='name' value={user.name} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Blood Type</h5>
                        <p className='text-muted'>{user.type}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Gender</h5>
                        <p className='text-muted'>{user.gender}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>DOB</h5>
                        <p className='text-muted'>{status == "display" ? user.dob : <input type={'text'} className='form-control' name='dob' value={user.dob} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Mobile No</h5>
                        <p className='text-muted'>{status == "display" ? user.mobileNo : <input type={'text'} className='form-control' name='mobileNo' value={user.mobileNo} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Email Id</h5>
                        <p className='text-muted'>{status == "display" ? user.emailid : <input type={'text'} className='form-control' name='emailid' value={user.emailid} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>State</h5>
                        <p className='text-muted'>{status == "display" ? user.state : <input type={'text'} className='form-control' name='state' value={user.state} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>District</h5>
                        <p className='text-muted'>{status == "display" ? user.city : <input type={'text'} className='form-control' name='city' value={user.city} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>PinCode</h5>
                        <p className='text-muted'>{status == "display" ? user.pincode : <input type={'text'} className='form-control' name='pincode' value={user.pincode} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>
                            Address
                        </h5>
                        <p>
                            {status == "display" ? user.address : <input type={'text'} className='form-control' name='address' value={user.address} onChange={handleChange}></input>}
                        </p>
                    </div>
                </div>
                <br>
                </br>
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        {status == "display" ? <input type={'button'} className={"btn btn-primary"} value={"Edit Profile"} onClick={edit}></input> : <input type={'button'} className={"btn btn-primary"} value={"Update Profile"} onClick={update}></input>}
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default PatientProfile;