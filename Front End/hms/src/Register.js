
import {  useState } from "react";
import { Link ,useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify'
//import { toast } from 'react-toastify'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import './comman.css';
// import registerimage from './images/registration.jpg';






function Register(){

  const centerDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
     // You can adjust this to your preferred height
    
  };

  
    
    var [ specificuser,setSpecificuser ] =useState({name:"",dob:"",gender:"",type:"",state:"",city:"",address:"",pincode:"",mobileNo:"",emailid:"", user:{username:"",password:""}})
    var nav=useNavigate();
  
//     var body = {
//     "name":"prasad dete",
//     "dob":"04-10-2000",
//     "gender":"M",
//     "type":"B_PLUS",
//     "state":"Maharashtra",
//     "city":"latur",
//     "address":"latur City",
//     "pincode":411006,
//     "mobileNo":"1234567890",
//     "emailnid":"pd@gmail.com",
//     "user":{
//     "username":"pd123",
//     "password":"pd123"
//     }
// }

// axios({
//     method: 'post',
//     url: 'http://172.18.5.0:8080/patient/signup',
//     data: body
// })
// .then(function (response) {
//     console.log(response.data);
// })
// .catch(function (error) {
//     console.log(error);
// });

var HandleChange=(args)=>{
    //debugger;
    var collecteduser={ ...specificuser};
    
    collecteduser[args.target.name]=args.target.value;
    setSpecificuser({ ...collecteduser });
    //console.log(specificuser);
}

var userhandler=(args)=>{
  var newuser={ ...specificuser.user };
  newuser[args.target.name]=args.target.value;
  setSpecificuser({...specificuser,user:{...newuser}})
}

var Reset=()=>{
  setSpecificuser({ name:"",dob:"",gender:"",type:"",state:"",city:"",address:"",pincode:"",mobileNo:"",emailid:"", user:{username:"",password:"" }});
}
//                 {name:"",dob:"",gender:"",specialization:"",joinDate:"",mobileNo:"",emailid:"", user:{username:"",password:""},dept:{department:""}}

var Submit=()=>{
console.log("aa gaya submit me")
console.log(specificuser)
    axios({
    method: 'post',
    url: 'http://localhost:7070/patient/signup',
    data: specificuser
})
.then(function (response) {
    //console.log(response.data);
    toast.success("registred patient")
    nav("/login");
    
})
.catch(function (error) {
    console.log(error);
    console.log(specificuser);
})

}

return <>
<h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>
  
   <div style={centerDivStyle}>
      

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form' style={{width:500}}>
            <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                name="name"
                value={specificuser.name}
                className='form-control'
                onChange={HandleChange} 
              />
            </div>
         <br></br>

            <div className='mb-3'>
              <label htmlFor=''>Address</label>
              <input type={"text"} name="address" value={specificuser.address} onChange={HandleChange}/>
            </div>
            <br></br>
       

                  <div className="row">
                <div className="col-md-6 mb-4">

                  <select className="form-select" aria-label="Default select example" name="state" onChange={HandleChange}>
                    <option  value={"State"}  >State</option>
                    <option  value={"Maharastra"} >Maharastra</option>
                    <option  value={"Punjab"}  >Punjab</option>
                    <option  value={"chennai"}  >chennai</option>
                  </select>

                  <select className="form-select" aria-label="Default select example" name="city" onChange={HandleChange}>
                    <option  value={"City"}>City</option>
                    <option  value={"Pune"} >Pune</option>
                    <option  value={"Mumbai"} >Mumbai</option>
                    <option  value={"Latur"} >Latur</option>
                  </select>

                </div>

                <br></br>
              
              </div>


              <div className="form-outline mb-4">
              <label className="form-label" >DOB</label>
                <input type={"text"} name="dob" value={specificuser.dob} onChange={HandleChange} className="form-control form-control-lg" />
              </div>
              <br></br>

              {/* <select className="form-select" aria-label="Default select example" name="type" onChange={HandleChange}>
                  <option  value={"A_PLUS"}>Gender</option>
                    <option  value={"M"}>MALE</option>
                    <option  value={"F"} >FEMALE</option>
                    <option  value={"O"} >OTHER</option>
                  </select> */}

              <select className="form-select" aria-label="Default select example" name="type" onChange={HandleChange}>
                  <option  value={"A_PLUS"}>Blood Type</option>
                    <option  value={"A_PLUS"}>A(+ve)</option>
                    <option  value={"A_MINUS"} >A(-ve)</option>
                    <option  value={"B_MINUS"} >B(-ve)</option>
                    <option  value={"B_PLUS"} >B(+ve)</option>
                    <option  value={"O_PLUS"} >O(+ve)</option>
                    <option  value={"O_MINUS"} >O(-ve)</option>
                    <option  value={"AB_PLUS"} >AB(+ve)</option>
                    <option  value={"AB_MINUS"} >AB(-ve)</option>
                  </select>

<div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

<h6 className="mb-0 me-4">Gender </h6>

<div className="form-check form-check-inline mb-0 me-4">
  <input className="form-check-input" type="radio"  name="gender"
  onChange={HandleChange} value={"F"} />
  <label className="form-check-label" >Female</label>
</div>

<div className="form-check form-check-inline mb-0 me-4">
  <input className="form-check-input" type="radio" name="gender"
  onChange={HandleChange} value={"M"}  />
  <label className="form-check-label" >Male</label>
</div>

<div className="form-check form-check-inline mb-0">
  <input className="form-check-input" type="radio"  name="gender"
    onChange={HandleChange} value={"O"} />
  <label className="form-check-label" >Other</label>
</div>

</div>


                  <br></br>
                  <br></br>
              <div className="form-outline mb-4">
              <label className="form-label" >Pincode</label>
                <input type={"text"} name="pincode" value={specificuser.pincode} onChange={HandleChange} className="form-control form-control-lg" />
              </div>

              <br></br>
              <div className="form-outline mb-4">
              <label className="form-label" >Mobile Number</label>
                <input type="number" name="mobileNo" value={specificuser.mobileNo} onChange={HandleChange} className="form-control form-control-lg" />
              </div>

              <br></br>
              <div className="form-outline mb-4">
              <label className="form-label" >Email Id</label>
                <input type={"text"} name="emailid" value={specificuser.emailid} onChange={HandleChange} className="form-control form-control-lg" />
                
              </div>
              <br></br>

              <div className="form-outline mb-4">  
              <label className="form-label" >User Name</label>
                <input type={"text"} name="username" value={specificuser.user.username}  onChange={userhandler} className="form-control form-control-lg" />
              </div>

              <br></br>

              <div className="form-outline mb-4">
              <label className="form-label" >Password</label>
                <input type="password" name="password" value={specificuser.user.password} onChange={userhandler} className="form-control form-control-lg" />
              </div> 

               <div className='mb-3'>
              <div className='mb-3'>
                Already got an account? <Link to='/login'>Login here</Link>
              </div>
              <button className='btn btn-success' onClick={Submit} >
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
   
</>


}

export default Register;
