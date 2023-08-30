import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Patient from "./patient/Patient";
import Login from "./Login";
import Footer from "./Footer";
import PatientProfile from "./patient/PatientProfile";
import PatientAppointment from "./patient/Appointments";
import PatientPrescription from "./patient/Prescriptions";
import Register from "./Register";
import Doctor_register from "./Doctor_registration";
import BookAppointment from "./patient/BookAppointment";
import ProtectedRoute from "./ProtectedRoute";
import Doctor from "./doctor/Doctor";
import DoctorProfile from "./doctor/DoctorProfile";
import DoctorAppointment from "./doctor/Appointments";
import DoctorPrescription from "./doctor/Prescriptions";
//import AdminDash from "./admin/AdminDash";
import Records from "./admin/Records";
import DoctorList from "./admin/DoctorList";
import AdminDash from "./admin/AdminDash";
import Admin from "./admin/Admin";
import PatientList from "./admin/PatientList";
import AppointmentList from "./admin/AppointmentList";

function App() {
    return <div>
        <Header></Header>
        <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/doctorregister" element={<Doctor_register />}></Route>
            {/* <Route path="/" element={<Admin />}></Route>
            <Route path="/admin" element={<AdminDash />}></Route> */}


            <Route path="/appointment" element={<ProtectedRoute />}>
                <Route path="" element={<BookAppointment />} />
            </Route>
            <Route path="/doctor" element={<ProtectedRoute />}>
                <Route path="" element={<Doctor/>}>
                    <Route path="" element={<DoctorProfile />} />
                    <Route path="profile" element={<DoctorProfile/>} />
                    <Route path="appointment" element={<DoctorAppointment />} />
                    <Route path="prescription" element={<DoctorPrescription />} />
                </Route>
            </Route>
            <Route path="/patient" element={<ProtectedRoute />}>
                <Route path="" element={<Patient />}>
                    <Route path="" element={<PatientProfile />} />
                    <Route path="profile" element={<PatientProfile />} />
                    <Route path="appointment" element={<PatientAppointment />} />
                    <Route path="prescription" element={<PatientPrescription />} />
                </Route>
            </Route>
            {/* <Route path="/admin" element={<ProtectedRoute />}>  */}
                <Route path="" element={<Admin />}>
                    <Route path="" element={<AdminDash />} />
                    <Route path="adminDash" element={<AdminDash/>} />
                    {/* <Route path="/admin/dashboard" element={<AdminDash />} /> */}
                    <Route path="/admin/doctor" element={<DoctorList />} />
                    <Route path="/admin/patient" element={<PatientList />} />
                    <Route path="/admin/appointment" element={<AppointmentList />} />
                    {/* <Route path="prescription" element={<AdminPrescription />} />  */}
                 </Route>
             {/* </Route> */}
        </Routes>
        <Footer></Footer>
    </div>
}

export default App;