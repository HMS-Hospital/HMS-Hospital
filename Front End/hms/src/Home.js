import banner from "./images/banner1.jpg";
import appointmentLogo from "./images/appointment.jpg"
import registerlogo from "./images/register.png";
import queryLogo from "./images/query.png";
import { Link } from "react-router-dom";
function Home() {
    return <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-10">
                    <img src={banner} alt="Hospital Banner" style={{ height: "600px", width: "100%" }}>
                    </img>
                </div>

                <div className="col-sm-2">
                    <Link to={"/appointment"} className="nav-link">
                        <div className="card">
                            <div className="card-img">
                                <img src={appointmentLogo} alt={"appointment logo"} style={{ height: "100px", width: "100%" }} className="card-img" ></img>
                            </div>

                            <div className="card-body">
                                <p className="card-text">Book An Appointment</p>
                            </div>
                        </div>
                    </Link>
                    <br>
                    </br>
                    <Link to={"/register"} className="nav-link">
                        <div className="card">
                            <div className="card-img">
                                <img src={registerlogo} alt={"appointment logo"} style={{ height: "100px", width: "100%" }} className="card-img"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Register</p>
                            </div>
                        </div>
                    </Link>
                    <br>
                    </br>
                    <Link to={"/feedback"} className="nav-link">
                        <div className="card">
                            <div className="card-img" >
                                <img src={queryLogo} alt={"appointment logo"} style={{ height: "100px", width: "100%" }} className="card-img"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Feedback</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>
}

export default Home;