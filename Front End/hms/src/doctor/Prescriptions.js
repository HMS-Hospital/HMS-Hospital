import { useEffect, useState } from "react";
import { Link ,useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from "axios";

//import { toast } from 'react-toastify'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
var prescription_id;

function DoctorPrescription(){
    var { id } = useParams();
    var [medicine, setMedicine] = useState([]);


    
   

    
    
   // setApptid(57);
    useEffect(() => {
       // setDetails({ ...details, p_id: sessionStorage.getItem("id") })

        
        const url = 'http://localhost:7070/prescription/add';        
        const config = {
          headers: {
            'Content-Type': 'application/json', // Specify the content type if sending JSON
            // other headers
          },
          params: {
            apptid: id // Query parameter
          }
        };
        
        axios.post(url, formData, config)
          .then(response => {
            // Handle the response
            console.log(response.data);
            console.log("id hai hai : "+response.data.id)
             prescription_id=response.data.id;
            //  d_id=response.data.d_id;
            //  p_id=response.data.p_id;

          })
          .catch(error => {
            // Handle errors
            console.error('An error occurred:', error);
          });

          axios.get("http://localhost:7070/prescription/getmedicines", {

        }).then((response) => {
          /////// 
          ///////
          setMedicine([...response.data]);
          //////
          ////////
        })
    }, [])

    const [formData, setFormData] = useState({

        CreatePrescriptionDetailsDTO: []
    });




    const addMedicine = () => {
        setFormData((prevData) => ({
            ...prevData,
            CreatePrescriptionDetailsDTO: [
                ...prevData.CreatePrescriptionDetailsDTO,
                {
                    m_id: 0,
                    quantity:0,
                    dosage: '',
                    duration: ''
                    
                }
            ]
        }));
    };


    
    var nav=useNavigate();

    const Submit = async () => {
        // Iterate over each object in CreatePrescriptionDetailsDTO
        for (const prescriptionDetail of formData.CreatePrescriptionDetailsDTO) {
          try {
            console.log(prescriptionDetail)
            // Perform an Axios POST request
            const response = await axios.post(`http://localhost:7070/prescription/detailsadding/${prescription_id}`, prescriptionDetail);
      
            // Handle the response (you can update state or do something else)
            console.log('Response:', response.data);
          } catch (error) {
            // Handle errors if the POST request fails
            console.error('Error:', error);
          }
        }

        nav("/doctor/appointment");
      };

    const handleMedicineChange = (index, field, value) => {
        setFormData((prevData) => {
            const updatedMedicines = [...prevData.CreatePrescriptionDetailsDTO];
            updatedMedicines[index][field] = value;
            return {
                ...prevData,
                CreatePrescriptionDetailsDTO: updatedMedicines
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
                        {/* medicine
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.m_id}
                            onChange={(e) => handleMedicineChange(index, 'm_id', e.target.value)}
                            placeholder="m_id"
                        /> */}
                        

                                  <div className="row">
                                   
                                            <p className="form-label">Medicine</p>
                                            <select className="form-select" aria-label="Default select example" name="m_id"  onChange={(e) => handleMedicineChange(index, 'm_id', e.target.value)}>
                                           
                                               
                                               
                                                <option value={"default"}>
                                                    Select Medicine
                                                </option>
                                                {
                                                    medicine.map(medicine => {
                                                        return <option value={medicine.id} key={medicine.id}>
                                                            {medicine.name}
                                                        </option>
                                                        

                                                        
                                                    })
                                                }
                                            </select>
                                        </div>
                                  
                        
                       
                         
                        <div className="row">
                                   
                                   <p className="form-label">Quantity</p>
                        {/* <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.quantity}
                            onChange={(e) => handleMedicineChange(index, 'quantity', parseInt(e.target.value))}
                            placeholder="Quantity"
                        /> */}

                            <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.quantity}
                            onChange={(e) => handleMedicineChange(index, 'quantity', e.target.value)}
                            placeholder="ho ja bhai"
                        />
                        </div>
                      
                        <div className="row">
                                   
                                   <p className="form-label">Dosage</p>                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.dosage}
                            onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                            placeholder="Dosage"
                        />
                        </div>
                         
                         <div className="row">
                                   
                                   <p className="form-label">Duration</p>
                        <input
                            type="text"
                            value={CreatePrescriptionDetailsDTO.duration}
                            onChange={(e) => handleMedicineChange(index, 'duration', e.target.value)}
                            placeholder="Duration"
                        />
                                                </div>

                <br></br>
                <br></br>
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