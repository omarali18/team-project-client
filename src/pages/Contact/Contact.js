import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f8ic1th",
        "template_pxdy8la",
        e.target,
        "user_huPYrSmTGTE3eZGm85Wp6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

    // setSuccess(true)
  };

  setTimeout(() => {
    setSuccess(false);
  }, 8000);
  return (
    <div>
      <div className="contact-banner">
        <Box
          className="link-container"
          sx={{
            ml: { md: 15, sm: 8, xs: 5 },
            pt: { md: "9.5rem", sm: "17rem", xs: "19.5rem" },
            fontSize: { md: "4rem" },
          }}
        >
          <NavLink
            to="/"
            // activeClassName="active"
            className="contact-link"
            // onClick={handleClick}
          >
            Home
          </NavLink>
          <span className="side-path">/contact us</span>
          {/* sx={{ml:{md:13}, fontSize:{md:'8rem', sm:"4rem"}}} */}
        </Box>
        <Typography
          variant="caption"
          className="contact-banner-text"
          sx={{
            ml: { md: 13, sm: 8, xs: 5 },
            fontSize: { md: "8rem", sm: "5rem", xs: "3rem" },
            fontFamily: " 'Courier New', Courier, monospace",
            fontWeight: "bolder",
          }}
        >
          Contact Us
        </Typography>
      </div>
      <Box sx={{ ml: { md: 15, sm: 8, xs: 5 }, mt: { md: 5, xs: 5 } }}>
        <h3 style={{ fontWeight: "bold", color: "orange", fontSize: "50px" }}>
          Contact Form
        </h3>
        <div className="success-message">
          {success && (
            <p>
              Your message has been successfully sent, I will contact you soon.
            </p>
          )}
        </div>
        <form onSubmit={sendEmail}>
          <div className="">
            <div className="">
              <label htmlFor="nmae" className="field-level">
                Full Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="text-field"
                required
              />{" "}
              <br />
              <label htmlFor="email" className="field-level">
                Enter Email
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="text-field"
                required
              />
            </div>
            <div className="">
              <label htmlFor="message" className="field-level">
                Message
              </label>{" "}
              <br />
              <textarea
                name="message"
                placeholder="Your message"
                className=" text-field textaria-field"
                required
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <button
                style={{
                  padding: "10px 30px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                SEND MEAL
              </button>
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
