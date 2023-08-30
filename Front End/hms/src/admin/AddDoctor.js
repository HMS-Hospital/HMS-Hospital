// AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';
import Header from './Header';

const Sidebar = () => {
  return (
    <div className="sidebar">   
      <div className="logo">Admin</div>
      <ul className="nav-links">
        <li className="nav-link active">Dashboard</li>
        <li className="nav-link">Patients</li>
        <li className="nav-link">Appointments</li>
        <li className="nav-link">Doctors</li>
        <li className="nav-link">Pharmacy</li>
        <li className="nav-link">Reports</li>
        <li className="nav-link">Payments</li>
        <li className="nav-link">Logout</li>
      </ul>
    </div>
  );
};

const Content = () => {
    const handleAddDoctor=()=>
    {

    }
  return (
    <>
        <div className="content">
      {/* <h1>Welcome!!!</h1> */}

      <center><div className="add-doctor-section">
        <h2 style={{fontFamily: 'Your Attractive Font, Arial, sans-serif'}}>Add Doctor</h2>
        <div className="add-doctor-form">
            
          <input
            type="text"
            placeholder="Name"
            // value={Name}
            // onChange={(e) => setName(e.target.value)}
            />
          <input
            type="text"
            placeholder="Age"
            //  value={Name}
            // onChange={(e) => setName(e.target.value)}
            />
          <input
            type="text"
            placeholder="Gender"
            // value={Name}
            // onChange={(e) => setName(e.target.value)}
            />

{/* <select className='add-doctor-form' name="group" id="txtGroup">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>

                </select> */}

            <input
            type="text"
            placeholder="Date of Birth"
            // value={specialty}
            // onChange={(e) => setSpecialty(e.target.value)}
            />

            <input
            type="text"
            placeholder="Blood Group"
            // value={specialty}
            // onChange={(e) => setSpecialty(e.target.value)}
            />

          <input
            type="text"
            placeholder="Phone"
            // value={Name}
            // onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Address"
            // value={Name}
            // onChange={(e) => setName(e.target.value)}
            />
          <input
            type="text"
            placeholder="Specialty"
            // value={specialty}
            // onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
            type="text"
            placeholder="Experience"
            // value={specialty}
            // onChange={(e) => setSpecialty(e.target.value)}
            />
          <button style={{width:800}}onClick={handleAddDoctor}>Add Doctor</button>
        </div>
      </div></center>

      <div className="records-section">
        <h3>Doctors</h3>
        <div className="records-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Specialist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>35</td>
                <td>Male</td>
                <td>123-456-7890</td>
                <td>Neurologist</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Female</td>
                <td>987-654-3210</td>
                <td>Neurologist</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Female</td>
                <td>987-654-3210</td>
                <td>Neurologist</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Female</td>
                <td>987-654-3210</td>
                <td>Neurologist</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Female</td>
                <td>987-654-3210</td>
                <td>Neurologist</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Female</td>
                <td>987-654-3210</td>
                <td>Neurologist</td>
              </tr>
              {/* Add more patient details as needed */}
            </tbody>
          </table>
        </div>
      </div>

<br></br><br></br>
    
            </div>
</>

  );
};

const AddDoctor = () => {
  return (
    <>
        <div><Header></Header></div>
    <div className="admin-dashboard">
      
      <Sidebar />
      <Content />
    </div>
    </>
  );
};

export default AddDoctor;
