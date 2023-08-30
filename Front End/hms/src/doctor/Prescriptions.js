import { useEffect, useState } from "react";
import { Link ,useNavigate } from 'react-router-dom';
import axios from "axios";

//import { toast } from 'react-toastify'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function DoctorPrescription(){

    useEffect(() => {
       // setDetails({ ...details, p_id: sessionStorage.getItem("id") })

        
        const url = 'http://localhost:7070/prescription/add';        
        const config = {
          headers: {
            'Content-Type': 'application/json', // Specify the content type if sending JSON
            // other headers
          },
          params: {
            apptid: 33 // Query parameter
          }
        };
        
        axios.post(url, formData, config)
          .then(response => {
            // Handle the response
            console.log(response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('An error occurred:', error);
          });
        // axios.get("http://localhost:7070/appointment/getdept", {

        // }).then((response) => {
        //     setDepartments([...response.data]);
        // })
    }, [])
  //  var [ prescription,setPrescription ] =useState({doc_id:"",p_id:"",objectArray:[{m_id:"",dosage:"",duration:"",qtantiy:""},{m_id:"",dosage:"",duration:"",qtantiy:""},{m_id:"",dosage:"",duration:"",qtantiy:""}]})
    
    // const [formData, setFormData] = useState({
    //     doc_id: 1,
    //     p_id: 3,
    //     CreatePrescriptionDetailsDTO: []
    // });
    const [formData, setFormData] = useState({
        doc_id: 1,
        p_id: 3,
        CreatePrescriptionDetailsDTO: []
    });



    const addMedicine = () => {
        setFormData((prevData) => ({
            ...prevData,
            CreatePrescriptionDetailsDTO: [
                ...prevData.CreatePrescriptionDetailsDTO,
                {
                    m_id: 0,
                    dosage: '',
                    duration: '',
                    quantity: 10
                }
            ]
        }));
    };


    
    var nav=useNavigate();

    var Submit=()=>{
        
        console.log("aa gaya added fun me")
        console.log(formData)



        // const url = 'http://localhost:7070/prescription/add';        
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json', // Specify the content type if sending JSON
        //     // other headers
        //   },
        //   params: {
        //     apptid: 40 // Query parameter
        //   }
        // };
        
        // axios.post(url, formData, config)
        //   .then(response => {
        //     // Handle the response
        //     console.log(response.data);
        //   })
        //   .catch(error => {
        //     // Handle errors
        //     console.error('An error occurred:', error);
        //   });











        //     axios({
        //     method: 'post',
        //     url: 'http://localhost:7070/prescription/add',
        //     data: formData
        // })
        // .then(function (response) {
        //     //console.log(response.data);
        //     nav("/doctor/profile");
            
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     console.log(formData);
        // })
    };

    const handleMedicineChange = (index, field, value) => {
        setFormData((prevData) => {
            const updatedMedicines = [...prevData.CreatePrescriptionDetailsDTO];
            updatedMedicines[index][field] = value;
            return {
                ...prevData,
                medicines: updatedMedicines
            };
        });
    };
    const centerDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
         // You can adjust this to your preferred height
        
      };

    return (<>
    <h1 style={{ textAlign: 'center', margin: 10 }}>prescription</h1>

        <div style={centerDivStyle}>
            
            <div style={{width:500}}>
            <ul>
                {formData.CreatePrescriptionDetailsDTO.map((CreatePrescriptionDetailsDTO, index) => (
                    <li>
                        medicine
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.m_id}
                            onChange={(e) => handleMedicineChange(index, 'm_id', e.target.value)}
                            placeholder="m_id"
                        />
                        <br></br>
                        <br></br>
                        Dosage
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.dosage}
                            onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                            placeholder="Dosage"
                        />
                         <br></br>
                         <br></br>
                        Duration
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.duration}
                            onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
                            placeholder="Duration"
                        />
                         <br></br>
                         <br></br>
                         
                        Quantity
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.quantity}
                            onChange={(e) => handleMedicineChange(index, 'quantity', parseInt(e.target.value))}
                            placeholder="Quantity"
                        />
                    </li>
                ))}
            </ul>
            <button style={{width:200}} className="btn btn-info" onClick={addMedicine}>Add Medicine</button>
            <button style={{width:200}} className="btn btn-success" onClick={Submit}>submit</button>


            </div>
        </div>
        </>
    );
}

export default DoctorPrescription;