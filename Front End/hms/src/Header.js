import logo from "./images/logo1.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
function Header() {

    var loggedIn = false;
    if (sessionStorage.getItem("isLoggedIn") != null) {
        loggedIn = true;
    }
    const navigate = useNavigate()
    var logout = ()=>{
        sessionStorage.clear();
        navigate("/");
    }

    return   <>
    <div className='navbar desktop en'>
       <nav className='navbar navbar-default'>
         <div className='container-fluid'>
           <div className='navbar-header'>
             <a className="navbar-brand" href="/">sunbeam hospital</a>
           </div>
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
               <li><a href="/about">About us</a></li>
               <li><a href="/contact">Contact</a></li>
             </ul>
 
             <ul className="nav navbar-nav navbar-right">
             <form className="navbar-form navbar-left">
               <div className="form-group">
                 <input type='text' className='form-control' placeholder='Search' />
               </div>
               {/* <button type="submit" className="btn btn-default">Search</button> */}
             </form>
               <li><a href="#">Call Us</a></li>
               <li>               {loggedIn?<NavDropdown title={"Hello"+" "+sessionStorage.getItem("username")} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/patient/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/patient/appointment">
                        Appointments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/patient/bill">
                        Bills
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/patient/prescription">Prescriptions</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>:<Nav.Link href="/login">Login</Nav.Link>}</li>
             </ul>
           </div>
         </div>
       </nav>
     </div>
         </>
}



export default Header;



//  <ul className="nav justify-content-end" style={{ paddingTop: "50px" }}>
// <Navbar expand="lg">
//     <Container>
        
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//                 {loggedIn?<NavDropdown title={"Hello"+" "+sessionStorage.getItem("username")} id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/patient/profile">Profile</NavDropdown.Item>
//                     <NavDropdown.Item href="/patient/appointment">
//                         Appointments
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/patient/bill">
//                         Bills
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="/patient/prescription">Prescriptions</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item onClick={logout}>
//                         Logout
//                     </NavDropdown.Item>
//                 </NavDropdown>:<Nav.Link href="/login">Login</Nav.Link>}
                
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>
// </ul>  