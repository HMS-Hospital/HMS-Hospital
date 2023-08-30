import PrescriptionsRow from './components/PrescriptionsRow';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function PatientPrescription(){

    const [searchText,setSearchText] =  useState("");
    var [prescriptions, setPrescriptions] = useState([]);
    const onSearch=(args)=>{
        debugger;
        setSearchText(args.target.value);
    }
    var nav=useNavigate();
    useEffect(() => {
        fetchData();
    }, [])



    var fetchData = () => {
        console.log(1);
        axios.get(`http://localhost:7070/prescription/show/${sessionStorage.getItem("id")}`, {
        }).then((response) => {
            console.log(response)
            console.log("hiiiiiiiiii")
            console.log(response.data.prescriptiondetails)
            setPrescriptions(response.data);
        })
    }
    var details = (id)=>{
        window.alert("pay karne ka baki hai filal")
        nav(`/patient/prescriptionsDetails/${id}`);}

    return <div className="container">
    <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>

        <div className="card-body"style={{width: "1500px"}}>
        <div><h4 className="card-title">
                    prescriptions
                </h4>
                    <div style={{float: "left" }}>
                    Search:
                        <input type='text' 
                               value={searchText} 
                               onChange={onSearch}/>
                        <br></br>
                    </div></div>
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
                                prescriptions.map((prescription) => {

                                    if(searchText!="")
                                    {
                                        
                                        if(prescription.d_name.toLowerCase().
                                        includes(searchText.toLowerCase()))
                                        {
                          return <PrescriptionsRow  key={prescription.id} 
                          prescription={prescription}
                                      details={details}
                                      />
                                        }
                                        else
                                        {
                                            return;
                                        }
                                        
                                    }
                                    {
                                        return <PrescriptionsRow  key={prescription.id} 
                                        prescription={prescription}
                                                    details={details}
                                                    />;
                                    }








                                    // return <tr key={prescriptions.id}>
                                    //     <td>
                                    //         {prescriptions.id}
                                    //     </td>
                                    //     <td>
                                    //         {prescriptions.d_name}
                                    //     </td>
                                    //     <td>
                                    //         {prescriptions.date.substring(0, 10) + ' ' + prescriptions.date.substring(11, 16)}
                                    //     </td>
                                    //     <td>
                                    //         {
                                    //           <input type={"button"} value={"Details"} className='btn btn-info' onClick={()=>{
                                    //                 details(prescriptions.id)
                                    //             }}></input>
                                    //         }
                                    //     </td>
                                    // </tr>


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