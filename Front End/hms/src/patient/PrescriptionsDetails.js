import axios from 'axios'
import { useState, useEffect } from 'react';

function PatientPrescription(){

    useEffect(() => {
        fetchData();
    }, [])

    var [prescriptions, setPrescriptions] = useState([]);

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/prescription/show/${sessionStorage.getItem("id")}`, {
        }).then((response) => {
            console.log(response)
            setPrescriptions(response.data);
        })
    }
    var details = (id)=>{
        window.alert("pay karne ka baki hai filal")
}

    return <div className="container">
    <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

        <div className="card-body">
            <h4 className="card-title">
                Prescriptions
            </h4>
            <div>
                <br></br>
                {console.log(prescriptions)}
                <div className="table table-table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>
                                    Id
                                </td>
                                <td>
                                    Doctor Name
                                </td>
                                <td>
                                    Appointment Date
                                </td>                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prescriptions.map((prescriptions) => {
                                    return <tr key={prescriptions.id}>
                                        <td>
                                            {prescriptions.id}
                                        </td>
                                        <td>
                                            {prescriptions.d_name}
                                        </td>
                                        <td>
                                            {prescriptions.date.substring(0, 10) + ' ' + prescriptions.date.substring(11, 16)}
                                        </td>
                                        <td>
                                            {
                                              <input type={"button"} value={"Details"} className='btn btn-info' onClick={()=>{
                                                    details(prescriptions.id)
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

export default PatientPrescription;