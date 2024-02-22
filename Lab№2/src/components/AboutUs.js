import React from "react";
import aboutusimg from "./img/img7.png"

    class AboutUs extends React.Component {
        render(){
            return(
                <div className="about-us">
            <img className="about-us-img" src={aboutusimg}/>
            <div className="about-us-text">
            <h3>About Us</h3>
            <h2 className="h2-aboutus">Design & Develop For Better Solution</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
            <button className="about-us-button">Learn More</button>
        </div>
        </div>
            )
    }
    }

export default AboutUs