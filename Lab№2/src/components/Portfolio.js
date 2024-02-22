import React from "react";
import portfimg1 from "./img/img8.png"
import portfimg2 from "./img/img9.png"
import portfimg3 from "./img/img10.png"

    class Portfolio extends React.Component {
        render(){
            return(
                <div className="div-portfolio">
            <div className="portfolio-text">
                <div className="portfolio-text-title">
                    <h3>Portfolio</h3>
                    <h2 className = "h2-portfolio">View Our Case Studies</h2>
                </div>
                <div  className="portfolio-text-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</p>
                    <a className = "portfolio-a">VIEW All</a>
                </div>
            </div>
            <div id="portfolio-img" >
            <img className="portfolio-img" src={portfimg1}/>
            <img className="portfolio-img" src={portfimg2}/>
            <img className="portfolio-img" src={portfimg3}/>
        </div>
        </div>
            )
    }
    }

export default Portfolio