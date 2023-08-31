import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PatientList() {
    var [patients, setPatients] = useState([]);
    var [status,setStatus] = useState("");
    //var {id}=useParams("");
    useEffect(() => {
        fetchData();
    }, [])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/patient/allpatients`, {
        }).then((response) => {
            console.log(response)
            setPatients(response.data);
        })
    }


    var cancel = (id)=>{
        console.log(id);
        axios.delete(`http://localhost:7070/user/delete/${id}`).then((response)=>{
            //setPatients(response.data);
            if(response.data=="Patient Removed")
            fetchData();
        })
    }

    return <>
    <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body"style={{width: "1500px"}}>
                <h4 className="card-title">
                    Patients
                </h4>
                <div>
                    <br></br>
                    {console.log(patients)}
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
                                        EmailId
                                    </td>
                                    <td>
                                        MobileNo
                                    </td>
                                    <td>
                                        Gender
                                    </td>
                                    <td>
                                        Date-Of-Birth
                                    </td>
                                    <td>
                                        Address
                                    </td>
                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patients.map((patient) => {
                                        return <tr key={patient.id}>
                                            <td>
                                                {patient.id}
                                            </td>
                                            <td>
                                                {patient.name}
                                            </td>
                                            <td>
                                                {patient.emailid}
                                            </td>
                                            <td>
                                                {patient.mobileNo}
                                            </td>
                                            <td>
                                                {patient.gender}
                                            </td>
                                            <td>
                                                {patient.dob}
                                            </td>
                                            <td>
                                                {patient.address}
                                            </td>
                                            <td>
                                                
                                                    <button style={{width:"100px"}} type='button' className='btn btn-danger' onClick={()=>{
                                                        cancel(patient.user_id)}}>Delete</button>
                                                
                                            </td>
                                        </tr>


                                    })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
}

export default PatientList;