import { Route,Routes,Link, Outlet } from "react-router-dom"


function Doctor() {
    return <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2">
                    <br></br>
                    <div className="card" style={{ boxShadow: "0px 0px 5px grey" }}>
                        <div className="card-body">
                            <nav className="nav flex-md-column">
                                <Link className="nav-link active" to={"/doctor/profile"}>Profile</Link>
                                <Link className="nav-link active" to={"/doctor/appointment"}>Appointments</Link>
                                {/* <Link className="nav-link active" to={"/doctor/prescription"}>Prescriptions</Link> */}
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

export default Doctor;