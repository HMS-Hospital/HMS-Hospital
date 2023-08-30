import axios from 'axios'
import { useState, useEffect } from 'react';
//import { Navigate } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";

function DoctorList() {
    var [doctors, setDoctors] = useState([]);
    var navigate = useNavigate();
    var [status,setStatus] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/doctor/showall`, {
        }).then((response) => {
            console.log(response)
            setDoctors(response.data);
        })
    }

    var cancel = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:7070/user/delete/${id}`).then((response)=>{
            if(response.data=="Doctor Removed")
            fetchData();
        })
        .catch((error) => {
            console.error('Error deleting doctor:', error);
        });
        
    }


    // var cancel = (id)=>{
    //     console.log(id);
    //     axios.delete(`http://localhost:7070/user/delete/${id}`).then((response)=>{
    //         if(response.data=="Doctor Removed")
    //         fetchData();
    //     })
    // }


    const signin = () => {
        navigate("/doctorregister")
    }

    return <>
    <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body">
                <h4 className="card-title">
                    Doctors
                </h4>
                <div>
                    <br></br>
                    {console.log(doctors)}
                    <div className="table table-table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td>
                                        Id
                                    </td>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        MobileNo
                                    </td>
                                     {/* <td>
                                        EmailId
                                    </td> */}
                                    <td>
                                        Gender
                                    </td>
                                    <td>
                                        Specialization
                                    </td>
                                    <td>
                                        Join-Date
                                    </td>
               
                                    <td>

                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctors.map((doctor) => {
                                        return <tr key={doctor.id}>
                                            <td>
                                                {doctor.id}
                                            </td>
                                            <td>
                                                {doctor.name}
                                            </td>
                                            <td>
                                                {doctor.mobileNo}
                                            </td>
                                            <td>
                                                {doctor.specialization}
                                            </td>
                                            {/* <td>
                                                {doctor.emailid}
                                            </td> */}
                                            <td>
                                                {doctor.gender}
                                            </td>
                                            <td>
                                                {doctor.joinDate}
                                            </td> 
                                            <td>
                                                
                                                    <button style={{width:"100px"}} type='button' className='btn btn-danger' onClick={()=>{
                                                        cancel(doctor.user_id)}}>Delete</button>
                                                
                                            </td>
                                        </tr>


                                    })}
                            </tbody>
                        </table>

                                    <center>
                        <button style={{width:"150px"}} type='button' className='btn btn-primary' onClick={signin}>Add Doctor</button>
                        </center>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
}

export default DoctorList;