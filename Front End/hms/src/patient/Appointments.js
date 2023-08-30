import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientAppointment() {
        const nav = useNavigate();

    var [appointments, setAppointments] = useState([]);
    var [status,setStatus] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/patient/appointments/${sessionStorage.getItem("id")}`, {
        }).then((response) => {
            console.log(response)
            setAppointments(response.data);
        })
    }

    var cancel = (id)=>{
        axios.put(`http://localhost:7070/appointment/cancel/${id}`).then((response)=>{
            if(response.data=="Appointment Cancelled")
            fetchData();
        })
    }

    var nothing = (id)=>{
        window.alert("ridirecting to pay bill")
        nav("/patient/bill");
}

    return <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body" style={{width: "1500px"}}>
                <h4 className="card-title">
                    Appointments
                </h4>
                <div>
                    <br></br>
                    {console.log(appointments)}
                    <div className="table table-table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td>
                                        Id
                                    </td>
                                    <td>
                                        Doctor
                                    </td>
                                    <td>
                                        Appointment Date
                                    </td>
                                    <td>
                                        Status
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointment) => {
                                        return <tr key={appointment.id}>
                                            <td>
                                                {appointment.id}
                                            </td>
                                            <td>
                                                {appointment.doctorname}
                                            </td>
                                            <td>
                                                {appointment.appoint.substring(0, 10) + ' ' + appointment.appoint.substring(11, 16)}
                                            </td>
                                            <td>
                                                {appointment.status}
                                            </td>
                                            <td>
                                                {
                                                    appointment.status=="ATTENDED" || appointment.status=="CANCELLED"|| appointment.status=="ATTENDED_AND_PRESCRIP"?appointment.status=="ATTENDED_AND_PRESCRIP"?<input type={"button"} value={"pay"} className='btn btn-success' onClick={()=>{
                                                        nothing(appointment.id)
                                                    }}></input> :"-" :<input type={"button"} value={"Cancel"} className='btn btn-danger' onClick={()=>{
                                                        cancel(appointment.id)
                                                    }}></input>
                                                }
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
}

export default PatientAppointment;