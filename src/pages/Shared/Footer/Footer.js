import { Box, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    const [success, setSuccess] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_6vx7x1q', 'template_m08x4pu', e.target, 'user_ykuLnlqbRI29KI44lZBYt')
        //     .then((result) => {
        //         console.log(result.text);
        //         setSuccess(true)
        //         e.target.reset()
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // setSuccess(true)
    };

    setTimeout(() => {
        setSuccess(false)
    }, 8000)
    return (
        <div className='footer-container'>
            <Box className='single-footer footer-box' sx={{mx:"auto"}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} >
                <Grid item xs={4} sm={4} md={4} className='grid-item' >
                <h2 className='footer-title' >SHOPIST</h2>
                        
                        <Typography variant="button">
                        <i className="fas fa-envelope set-icon email"></i>xxxxxxxxx@gmail.com
                        </Typography><br />
                        <Typography variant="button">
                        <i className="fas fa-phone set-icon phone"></i>+880 18xxxxxxxxx
                        </Typography><br /> 
                        <Typography variant="button">
                        <i class="fas fa-map-marker-alt set-icon location"></i>Dhanmobdi 5, Road no:7, house no: 7/B
                        </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} className='grid-item' >
                <h2 className='footer-title'>Categories</h2>
                <Box sx={{ display: 'flex'}}>
                    <Box>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> Woman's Collection</a>
                        </Typography>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right  link-icon"></i> Mans's Collection</a>
                        </Typography>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> Stylish Bag's</a>
                        </Typography>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> Jewelry</a>
                        </Typography>
                    </Box>
                    <Box sx={{ml:6}}>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> Shoes Collection</a>
                        </Typography>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> Dresses</a>
                        </Typography>
                        <Typography variant='subtitle1'>
                        <a href="/#" className='all-link'><i className="fas fa-hand-point-right link-icon"></i> For Chields </a>
                        </Typography>
                    </Box>
                </Box>
               
                </Grid>
                <Grid item xs={4} sm={4} md={4} className='footer-manue' >
                <div className="email-contaimer" id="contact">
                    {/* 
                    form-container
                    kdsf 
                    */}

<div className="">
    <h2>Say Hello!</h2>
    <div className="success-message">
        {
            success && <p>Your message has been successfully sent, I will contact you soon.</p>
        }
    </div>
    <form onSubmit={sendEmail} className='mt-4'>
        <div className="row">
            <div className="col-12 col-md-12">
                <label htmlFor="email" >Enter Email</label> <br />
                <input className='p-2 w-75' type="email" name="email" placeholder="Your email" />
            </div>
            <div className="col-12 col-md-12 mt-3">
                
                <textarea className='p-2 w-75' name="message" placeholder="Your message" />
            </div>
        </div>
        <div className="row">

            <div className="col  mt-3">
                <button className='py-2 px-4 footer-send'>Send</button>
            </div>

        </div>
    </form>
</div>
</div>
                </Grid>
            </Grid>
            </Box>
            {/* <div className=" pt-2 footer-container">
                <div className="p-4  m-5 row  mx-auto footer-qsn">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 qsn">
                        <h3 className="fst-normal">QUESTIONS? REQUESTS? </h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
                        <h2 className="float-md-end float-sm-start"><button className="contact-btn job-offers">Contact us <i className="fas fa-arrow-right"></i></button></h2>
                    </div>
                </div>
                <div className="row p-3 mx-auto footer-deatel">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-7 col-12 col-sm-12">
                        <h3 className="fw-light">THE HOSPITAL WELCOMES YOU 24/7</h3>
                        <p><small className="visits">Visits to hospitalized patients are authorized
                            under conditions and by appointment</small></p>
                        <p><a className="visitor-information" href="#">Patient & visitor information <i className="fas fa-arrow-right"></i></a></p>
                        <h6>Find a physician</h6>
                        <button className="job-offers">Our job offers</button>
                    </div>
                    <div className="  p-3 col-lg-2 col-md-5 col-12 col-sm-12">
                        <h3>CONDITIONS</h3>
                        <small><a className="ancor" href="#">Endometriosis</a></small><br />
                        <small><a className="ancor" href="#">The Female Heart</a></small><br />
                        <small><a className="ancor" href="#">Palpitations</a></small><br />
                        <small><a className="ancor" href="#">Pelvic varicose veins</a></small><br />
                        <small><a className="ancor" href="#">in women</a></small><br /><br />
                        <h5><a className="display" href="#">Display all</a></h5>
                    </div>
                    <div className=" p-3  col-lg-2 col-md-6 col-12 col-sm-12">
                        <h3>EXAMS</h3>
                        <small><a className="ancor" href="#">3D Mammography</a></small><br />
                        <small><a className="ancor" href="#">Amniocentesis</a></small><br />
                        <small><a className="ancor" href="#">Calcium Score</a></small><br />
                        <small><a className="ancor" href="#">Cardiac MRI</a></small><br /><br />
                        <h5><a className="display" href="#">Display all</a></h5>
                    </div>
                    <div className="social-media p-3 col-lg-3 col-md-6 col-12 col-sm-12">
                        <h3>OUR SOCIAL MEDIA</h3>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div> */}
            <div className="Copyright">
                <p>Copyright &copy; 2021 All rights reserved | IT Department .</p>
            </div>
        </div>
    );
};

export default Footer;