import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <hr></hr>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>About Us</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  gravida mi at risus ultrices, nec accumsan diam sollicitudin.
                  Nulla facilisi.
                </p>
              </div>
              <div className="col-md-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white" href="/">Home</a>
                  </li>
                  <li>
                    <a className="text-white" href="/about">About</a>
                  </li>
                  <li>
                    <a className="text-white" href="/services">Services</a>
                  </li>
                  <li>
                    <a className="text-white" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Contact Us</h5>
                <address>
                  123 Main Street <br />
                  City, State 12345 <br />
                  Phone: (123) 456-7890 <br />
                  Email: info@example.com
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>&copy; 2023 Hospital Management System. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      );

}

export default Footer;




//   return <div className="container-fluid" style={{ backgroundColor: "#212529" }}>
//   <div className="row">
//       <div className="col-sm-4">
//           <div className="container">
//               <footer className="py-5">
//                   <div className="row">
//                       <div className="col-2">
//                           <h5 style={{color:"white"}}>Section</h5>
//                           <ul className="nav flex-column">
//                               <li className="nav-item mb-2">
//                                   <Link className="nav-link p-0 text-muted" to={"/"} style={{ color: "black" }}>Home</Link>
//                               </li>
//                               <li className="nav-item mb-2">
//                                   <Link className="nav-link p-0 text-muted" to={"/about"} style={{ color: "black" }}>About</Link>
//                               </li>
//                               <li className="nav-item mb-2">
//                                   <Link className="nav-link p-0 text-muted" to={"/contact"} style={{ color: "black" }}>Contact</Link>
//                               </li>
//                               <li className="nav-item mb-2">
//                                   <Link className="nav-link p-0 text-muted" to={"/Department"} style={{ color: "black" }}>Department</Link>
//                               </li>
//                               <li className="nav-item mb-2" >
//                                   <Link className="nav-link p-0 text-muted" to={"/login"} style={{ color: "black" }}>Login</Link>
//                               </li>
//                           </ul>
//                       </div>
//                   </div>
//               </footer>
//           </div>
//       </div>

//   </div>
// </div>