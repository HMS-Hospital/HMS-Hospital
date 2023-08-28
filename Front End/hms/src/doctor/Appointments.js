import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function DoctorAppointment() {
    var [appointments, setAppointments] = useState([]);
    var [status,setStatus] = useState("");
    const nav = useNavigate();
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        fetchData();
    }, [status])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/doctor/appointments/${sessionStorage.getItem("id")}`, {
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
    var confirm = (id)=>{
        axios.put(`http://localhost:7070/appointment/confirm/${id}`).then((response)=>{
            fetchData();
        })
    }
    var attend = (id)=>{
        axios.put(`http://localhost:7070/appointment/attended/${id}`).then((response)=>{
            fetchData();
        })
        nav(`/doctor/prescription/${id}`);
    }
    var Bill = (id)=>{
        axios.put(`http://localhost:7070/appointment/billGenerated/${id}`).then((response)=>{
            fetchData();
    })
                window.alert("bill is generated")
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
                                        patient Name
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
                                                {appointment.patientname}
                                            </td>
                                            <td>
                                                {appointment.appoint.substring(0, 10) + ' ' + appointment.appoint.substring(11, 16)}
                                            </td>
                                            <td>
                                                {appointment.status}
                                            </td>
                                            <td>
                                                {
                                                    appointment.status=="ATTENDED" || appointment.status=="CANCELLED"|| appointment.status=="ATTENDED_AND_PRESCRIP"|| appointment.status=="ATTENDED_AND_BILL_GENERATED"?"-" :<input type={"button"} value={"Cancel"} className='btn btn-danger' onClick={()=>{
                                                        cancel(appointment.id)
                                                    }}></input>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    appointment.status=="ATTENDED" || appointment.status=="CANCELLED"|| appointment.status=="ATTENDED_AND_BILL_GENERATED"?
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    "-" 
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    :
                                                    
                                                   appointment.status=="CONFIRMED"?<input type={"button"} value={"Attend"} className='btn btn-info' onClick={()=>{
                                                        attend(appointment.id)
                                                    }}></input>
                                                    
                                                    
                                                    :

                                                    appointment.status=="ATTENDED_AND_PRESCRIP"?<input type={"button"} value={"BIll"} className='btn btn-success' onClick={()=>{
                                                        Bill(appointment.id)
                                                    }}></input>:
                                                    
                                                    <input type={"button"} value={"Confirm"} className='btn btn-success' onClick={()=>{
                                                        confirm(appointment.id)
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

export default DoctorAppointment;