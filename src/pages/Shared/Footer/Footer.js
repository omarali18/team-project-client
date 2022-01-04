import { Box, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_f8ic1th', 'template_pxdy8la', e.target, 'user_huPYrSmTGTE3eZGm85Wp6')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    // setSuccess(true)
  };

  setTimeout(() => {
    setSuccess(false);
  }, 8000);
  return (
    <div className="footer-container">
      <Box className="single-footer footer-box" sx={{ mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4} className="grid-item">
            <h2 className="footer-title">SHOPIST</h2>

            <Typography variant="button">
              <i className="fas fa-envelope set-icon email"></i>
              xxxxxxxxx@gmail.com
            </Typography>
            <br />
            <Typography variant="button">
              <i className="fas fa-phone set-icon phone"></i>+880 18xxxxxxxxx
            </Typography>
            <br />
            <Typography variant="button">
              <i class="fas fa-map-marker-alt set-icon location"></i>Dhanmobdi
              5, Road no:7, house no: 7/B
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} className="grid-item">
            <h2 className="footer-title">Categories</h2>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i>{" "}
                    Woman's Collection
                  </a>
                </Typography>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right  link-icon"></i>{" "}
                    Mans's Collection
                  </a>
                </Typography>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i>{" "}
                    Stylish Bag's
                  </a>
                </Typography>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i>{" "}
                    Jewelry
                  </a>
                </Typography>
              </Box>
              <Box sx={{ ml: 6 }}>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i> Shoes
                    Collection
                  </a>
                </Typography>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i>{" "}
                    Dresses
                  </a>
                </Typography>
                <Typography variant="subtitle1">
                  <a href="/#" className="all-link">
                    <i className="fas fa-hand-point-right link-icon"></i> For
                    Chields{" "}
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4} className="footer-manue">
            <div className="email-contaimer" id="contact">
              {/* 
                    form-container
                    kdsf 
                    */}

              <div className="">
                <h2>Say Hello!</h2>
                <div className="success-message">
                  {success && (
                    <p>
                      Your message has been successfully sent, I will contact
                      you soon.
                    </p>
                  )}
                </div>
                <form onSubmit={sendEmail} className="mt-4">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <label htmlFor="email">Enter Email</label> <br />
                      <input
                        className="p-2 w-75"
                        type="email"
                        name="email"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="col-12 col-md-12 mt-3">
                      <textarea
                        className="p-2 w-75"
                        name="message"
                        placeholder="Your message"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col  mt-3">
                      <button className="py-2 px-4 footer-send">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div className="Copyright">
        <p>Copyright &copy; 2021 All rights reserved | IT Department .</p>
      </div>
    </div>
  );
};

export default Footer;
