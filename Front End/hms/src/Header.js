import logo from "./images/logo1.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
//import { Dropdown } from 'react-bootstrap';

function Header() {
  var loggedIn = false;
  if (sessionStorage.getItem("isLoggedIn") != null) {
      loggedIn = true;
  }
  
  const navigate = useNavigate();

  var logout = () => {
      sessionStorage.clear();
      navigate("/");
  };

  return (
      <div className='navbar desktop en'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'  style={{ width: '100%' }}>
              <div className='container-fluid'>
                  <a className='navbar-brand' href='/'>sunbeam hospital</a>
                  <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                      <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id='navbarNav'>
                      <ul className='navbar-nav'>
                          <li className='nav-item'>
                              <NavLink className='nav-link' to='/' activeClassName='active' exact>Home</NavLink>
                          </li>
                          <li className='nav-item'>
                              <NavLink className='nav-link' to='/about'>About us</NavLink>
                          </li>
                          <li className='nav-item'>
                              <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                          </li>
                      </ul>


                      <ul className="nav navbar-nav ms-auto" style={{marginRight:'20px'}} > {/* Use ms-auto to push content to the right */}
                          {/* <li className='nav-item'>
                              <a className='nav-link' href='#'>Call Us</a>
                          </li> */}
                          <li className='nav-item'>
                              {loggedIn ? (
                                  <Dropdown>
                                      <Dropdown.Toggle id='basic-nav-dropdown'>
                                          {"Hello" + " " + sessionStorage.getItem("username")}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                          <Dropdown.Item href='/patient/profile'>Profile</Dropdown.Item>
                                          <Dropdown.Item href='/patient/appointment'>Appointments</Dropdown.Item>
                                          <Dropdown.Item href='/patient/bill'>Bills</Dropdown.Item>
                                          <Dropdown.Item href='/patient/prescription'>Prescriptions</Dropdown.Item>
                                          <Dropdown.Divider />
                                          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                      </Dropdown.Menu>
                                  </Dropdown>
                              ) : (
                                  <NavLink className='nav-link' to='/login'>Login</NavLink>
                              )}
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  );
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
