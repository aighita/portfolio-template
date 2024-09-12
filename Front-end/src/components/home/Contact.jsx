import React from "react";
import { Jumbotron } from "./migration";
import { useNavigate } from "react-router-dom"; // useNavigate for react-router-dom v6

const Contact = ({ heading, message }) => {
  const navigate = useNavigate(); // Replaces useHistory

  const handleMyWorkClick = () => {
    navigate("/my-work"); // Navigate to "/my-work"
  };

  return (
    <Jumbotron id="aboutme" className="m-0">
      {/* Use justify-content-between to space out the two columns */}
      <div className="container d-flex justify-content-between row"> 
        {/* LEFT SIDE - Contact Form */}
        <div className="col-5 d-none d-lg-block align-self-center">
          <h3>Contact Me</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        {/* RIGHT SIDE - Presentation Text with Button */}
        <div className="col-5 d-none d-lg-block align-self-center">
          <h3>{heading}</h3>
          <p>{message}</p>
          <button className="btn btn-outline-primary" onClick={handleMyWorkClick}>
            View My Work
          </button>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Contact;
