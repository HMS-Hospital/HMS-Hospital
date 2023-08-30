import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function PatientPrescriptionsDetails(){
    var { id } = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    var [prescriptionDetail, setPrescriptions] = useState([]);

    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/prescription/details/${id}`, {
        }).then((response) => {
            console.log("byeeeeee")
            console.log(response)
            console.log("byeeeeee")
            console.log(response.data)


            
            setPrescriptions(response.data.pdetails);
        })
    }


return <div className="container">
<div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

    <div className="card-body">

   {prescriptionDetail.length > 0 ? (
   prescriptionDetail.map((details)=>{

return <div className="container-fluid">
    <div className="row">
        <div className="col-sm-20">
            <br></br>
            <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>
                <div className="card-body">
                  <center>{details.m_name}</center>
                  dosage : {details.dosage}
                  <br></br>
                  duration : {details.duration}
                  <br></br>
                  quantity : {details.quantity}
                </div>
            </div>
        </div>
        <div className="col-sm-10">
            <br></br>
        </div>
    </div>
</div>


   })):(<p>No prescription details available.</p>)}

    </div>
</div>
</div>

//     return <div className="container">
//     <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

//         <div className="card-body">
//             <h4 className="card-title">
//                 Prescriptions
//             </h4>
//             <div>
//                 <br></br>
//                 {console.log(prescriptions)}
//                 <div className="table table-table-responsive">
//                     <table className="table table-hover">
//                         <thead>
//                             <tr>
//                                 <td>
//                                     Id
//                                 </td>
//                                 <td>
//                                     Doctor Name
//                                 </td>
//                                 <td>
//                                     Appointment Date
//                                 </td>                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 prescriptions.map((prescriptions) => {
//                                     return <tr key={prescriptions.id}>
//                                         <td>
//                                             {prescriptions.id}
//                                         </td>
//                                         <td>
//                                             {prescriptions.d_name}
//                                         </td>
//                                         <td>
//                                             {prescriptions.date.substring(0, 10) + ' ' + prescriptions.date.substring(11, 16)}
//                                         </td>
//                                         <td>
//                                             {
//                                               <input type={"button"} value={"Details"} className='btn btn-info' onClick={()=>{
//                                                     details(prescriptions.id)
//                                                 }}></input>
//                                             }
//                                         </td>
//                                     </tr>


//                                 })}
//                         </tbody>
//                     </table>
//                 </div>

//             </div>
//         </div>
//     </div>
// </div>
}

export default PatientPrescriptionsDetails;