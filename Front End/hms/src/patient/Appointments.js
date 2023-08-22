import axios from 'axios'
import { useState, useEffect } from 'react';
function PatientAppointment() {
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

    return <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body">
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
                                                    appointment.status=="ATTENDED" || appointment.status=="CANCELLED"?"-" :<input type={"button"} value={"Cancel"} className='btn btn-danger' onClick={()=>{
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