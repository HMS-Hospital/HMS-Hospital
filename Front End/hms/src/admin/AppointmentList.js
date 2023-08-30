import axios from 'axios'
import { useState, useEffect } from 'react';

function AppointmentList() {
    var [appointments, setAppointments] = useState([]);
    var [status,setStatus] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/appointment/getAttended`, {
        }).then((response) => {
            console.log(response)
            setAppointments(response.data);
        })
    }

    return <>
    <div className="container">
        <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

            <div className="card-body">
                <h4 className="card-title">
                    Attended Appointments
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
                                       Patient Name
                                    </td>
                                    <td>
                                       Doctor Name
                                    </td>
                                    <td>
                                        Appointment Date
                                    </td>
                                    <td>
                                       Status
                                    </td>
                                    {/* <td>
                                        EmailId
                                    </td>
                                    <td>
                                        MobileNo
                                    </td>
                                    <td>
                                        Gender
                                    </td>
                                    <td>
                                        Specialization
                                    </td>
                                    <td>
                                        joinDate
                                    </td>
                 */}
                                    <td>

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
                                                {appointment.doctorname}
                                            </td>
                                            <td>
                                                {appointment.appoint}
                                            </td> 
                                            {/* <td>
                                                {doctor.emailid}
                                            </td>
                                            <td>
                                                {doctor.mobile_no}
                                            </td>
                                            <td>
                                                {doctor.gender}
                                            </td>
                                            <td>
                                                {doctor.specialization}
                                            </td>
                                            <td>
                                                {doctor.join_date}
                                            </td> */}
                                            {/* <td>
                                                
                                                    <button style={{width:"100px"}} type='button' className='btn btn-danger' onClick={()=>{
                                                        cancel(patient.id)}}>Delete</button>
                                                
                                            </td> */}
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

export default AppointmentList;