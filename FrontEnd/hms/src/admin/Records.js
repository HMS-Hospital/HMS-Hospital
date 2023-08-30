// AdminDashboard.js
import React, { useState } from 'react';
// import './Records.css';
// import Header from './Header';

function Records()
{
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [details, setDetails] = useState(null);

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setSelectedYear('');
    // Fetch details based on selected month
    // setDetails(fetchDetailsByMonth(month));
  };

  const handleSelectYear = (year) => {
    setSelectedMonth('');
    setSelectedYear(year);
    // Fetch details based on selected year
    // setDetails(fetchDetailsByYear(year));
  };


  return <>
    <div className="admin-dashboard">
    <div className="sidebar">
    <div className='mb-3'></div>
   
      <div className="logo">Admin</div>
      <ul className="nav-links">
        <li className="nav-link active">Dashboard</li>
        <li className="nav-link">Patients</li>
        <li className="nav-link">Appointments</li>
        <li className="nav-link">Doctors</li>
        <li className="nav-link">Reports</li>
        <li className="nav-link">Payments</li>
        <li className="nav-link">Logout</li>
      </ul>
    </div>
    <div className="content">
      <h1 style={{marginTop:"20px"}}>Hospital Records</h1>
      <div className="filter-section">
        <div className="filter-wrapper">
          <div className="filter-container">
            <label>Select Month:</label>
            <select value={selectedMonth} onChange={(e) => handleSelectMonth(e.target.value)}>
              <option value="">All</option>
              <option value="January">January</option>
              <option value="February">February</option>
              {/* Add more months */}
            </select><br />
          </div><br />
          <div className="filter-container">
            <label>Select Year:</label>
            <select value={selectedYear} onChange={(e) => handleSelectYear(e.target.value)}>
              <option value="">All</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              {/* Add more years */}
            </select>
          </div>
        </div>
      </div>
      <div className="details-section">
        <h3>Details</h3>
        <div className="details-wrapper">
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Patients Treated</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Doctors</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Payment</td>
                <td>51,25,789</td>
              </tr>
              {/* Add more details */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  </>

};






// const Sidebar = () => {
//   return (
//     <div className="sidebar">   
//       <div className="logo">Admin</div>
//       <ul className="nav-links">
//         <li className="nav-link active">Dashboard</li>
//         <li className="nav-link">Patients</li>
//         <li className="nav-link">Appointments</li>
//         <li className="nav-link">Doctors</li>
//         <li className="nav-link">Pharmacy</li>
//         <li className="nav-link">Reports</li>
//         <li className="nav-link">Payments</li>
//         <li className="nav-link">Logout</li>
//       </ul>
//     </div>
//   );
// };

// const Content = () => {
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [details, setDetails] = useState(null);

//   const handleSelectMonth = (month) => {
//     setSelectedMonth(month);
//     setSelectedYear('');
//     // Fetch details based on selected month
//     // setDetails(fetchDetailsByMonth(month));
//   };

//   const handleSelectYear = (year) => {
//     setSelectedMonth('');
//     setSelectedYear(year);
//     // Fetch details based on selected year
//     // setDetails(fetchDetailsByYear(year));
//   };

//   return (
//     <div className="content">
//       <h1>Hospital Records</h1>

//       <div className="filter-section">
//         {/* <h3></h3> */}
//         <div className="filter-wrapper">
//           <div className="filter-container">
//             <label>Select Month:</label>
//             <select
//               value={selectedMonth}
//               onChange={(e) => handleSelectMonth(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="January">January</option>
//               <option value="February">February</option>
//               {/* Add more months */}
//             </select><br></br>
//           </div><br></br>
//           <div className="filter-container">
//             <label>Select Year:</label>
//             <select
//               value={selectedYear}
//               onChange={(e) => handleSelectYear(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="2021">2021</option>
//               <option value="2022">2022</option>
//               {/* Add more years */}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* {details && ( */}
//         <div className="details-section">
//           <h3>Details</h3>
//           <div className="details-wrapper">
// <table>
//   <thead>
//     <tr>
//       <th>Details</th>
//       <th>Count</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Patients Treated</td>
//       <td>50</td>
//     </tr>
//     <tr>
//       <td>Doctors Added</td>
//       <td>10</td>
//     </tr>
//     <tr>
//       <td>Appointments</td>
//       <td>25</td>
//     </tr>
//     <tr>
//       <td>Employees Added</td>
//       <td>136</td>
//     </tr>
//     <tr>
//       <td>Beds Available</td>
//       <td>42</td>
//     </tr>
//     <tr>
//       <td>Wards</td>
//       <td>6</td>
//     </tr>
//     <tr>
//       <td>Equipment Losses</td>
//       <td>25,644</td>
//     </tr>
//     <tr>
//       <td>Fee Collected</td>
//       <td>50,12,000</td>
//     </tr>
//   </tbody>
// </table>
//           </div>
//         </div>
//       {/* )} */}
//     </div>
//   );
// };

// const RecordsPage = () => {
//   return (
//     <>
//       {/* <div><Header /></div> */}
//       <div className="admin-dashboard">
//         <Sidebar />
//         <Content />
//       </div>
//     </>
//   );
// };

export default Records;
