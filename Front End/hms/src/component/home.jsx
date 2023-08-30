import React from "react";
import './home.css'
import { useState, useEffect } from "react";
import fetchData from "../services/home";
//import Header from "./header"
//import Footer from "./footer"
import video from '../videos/home2.mp4'
import neurology from '../images/Neurology.jpg'
import dentist from '../images/Dentist.jpg'
import dermatology from '../images/Dermatology.jpg'
import cardiology from '../images/Cardiology.jpg'




function HomePage() {

  const [data, setData] = useState([]);
  const dept = [neurology,dentist,dermatology,cardiology];
  var i = 0;
  useEffect(() => {
    const storedData = sessionStorage.getItem("fetchedData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData()
        .then(data => setData(data))
        .catch(error => console.error("Error:", error));
    }
  }, []);
  if (data === null) {
    // Data is not yet available, you can show a loading message or spinner
    return <div>Loading...</div>;
  }
  return (
   
    < >
    
      {/* <Header></Header> */}
          
      <div>
          <div className="hero-section">
        <video autoPlay loop muted className="hero-background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="hero-title">Book an appointment for an in-clinic consultation</h1>
        <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="/login" className="explore-button">Book Appointment</a>
      </div>

      <br /><br />
      <h1 className="heading1">Book an appointment for an in-clinic consultation</h1>
      <br /><br />
      <div className="bottom-options">

      {data.map(item => (
              <div className="options1">
              <center><img className="bottom-op-img" src={dept[i++]} alt="speciality-img" />
                <h2>{item.department}</h2></center>
            </div>
            ))}
      </div>

      </div>
      
     {/* <Footer></Footer> */}
     
    </>
  );
}

export default HomePage;
