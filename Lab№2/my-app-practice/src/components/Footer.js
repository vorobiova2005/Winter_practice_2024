import React from "react";
import footerimg1 from "./img/img1.png"


    class Footer extends React.Component {
        render(){
            return(
                <footer>
                <div className="footer-logo">
                   <img className="footer-img" src={footerimg1}/> 
                </div>
                
                <div className="footer-ourcontact">
                    <h3>Our Contact</h3>
                    <p>Office: 4042 Imperial Road, UK</p>
                    <p>Help; (0411) 425 277 / 425</p>
                    <p>Email: inbox@finance.com</p>
                </div>
                
                <div className="footer-aboutus">
                    <h3> About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </p>
                </div>
                
                <div className="footer-info">
                    <div className="footer-input">
                        <h3>Subscribe</h3>
                        <input placeholder="Your Email" type="text" />
                    </div>
                    <h3>Follow Us</h3>
                  
                </div>
                </footer>
            )
    }
    }

export default Footer