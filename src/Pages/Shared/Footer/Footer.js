import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=" footer mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 pt-5 pb-3">
                    <div className="cols">
                        <h4 className='pb-1'>Contact Us:</h4>
                        <h6>122/2 Rajnogor Area, Habiganj, Bangladesh</h6>
                        <h6>Phone Number: 01711111101</h6>
                        <h6>E-mail: potteryshop@gmail.com</h6>
                        <br />
                    </div>
                    <div className="cols">
                        <h4 className='pb-1'>Our Main Branches:</h4>
                        <h6>MohaKhali DOH, Dhaka</h6>
                        <h6>Dhanmondi, Dhaka</h6>
                        <h6>Farmgate, Tejgao, Dhaka</h6>
                        <br />
                    </div>
                    <div className="cols">
                        <h4 className='pb-1'>Support:</h4>
                        <h6>Contact Us</h6>
                        <h6>Unique Products</h6>
                        <h6>Client satisfaction</h6>
                        </div>
                </div>
                <footer className="pb-5">
                    © 2022 Pottery Shop All rights reserved
                </footer>
            </div>
        </div>
    );
};

export default Footer;