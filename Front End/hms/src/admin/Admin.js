import { Route,Routes,Link, Outlet } from "react-router-dom"


function Admin() {
    return <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <br></br>
                    <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>
                        <div className="card-body">
                            <nav className="nav flex-md-column">
                                <Link className="nav-link active" to={"/adminDash"}>Dashboard</Link>
                                <Link className="nav-link active" to={"/admin/patient"}>Patients</Link>
                                <Link className="nav-link active" to={"/admin/appointment"}>Appointments</Link>
                                <Link className="nav-link active" to={"/admin/doctor"}>Doctors</Link>
                                <Link className="nav-link active" to={"/admin/reports"}>Reports</Link>
                                <Link className="nav-link active" to={"/admin/payments"}>Payments</Link>
                                <Link className="nav-link active" to={"/login"}>Logout</Link>

                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10">
                    <br></br>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
}

export default Admin;