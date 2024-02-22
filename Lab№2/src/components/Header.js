import React from "react";
import logo from "./img/img1.png"
import headimgf from "./img/img2.png"
import headimgs from "./img/img3.png"
import headinfoimg1 from "./img/img4.png"
import headinfoimg2 from "./img/img5.png"
import headinfoimg3 from "./img/img6.png"

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <header>
            <div className="header-menu">
            <img  src={logo} className="logo"/>
            <nav>
                <ul className="list-header">
                    <li className="li-header">Home</li>
                    <li className="li-header">About Us</li>
                    <li className="li-header">Portfolio</li>
                    <li className="li-header">News</li>
                    <li className="li-header">Contact</li>
                </ul> 
            </nav>
            <div className="menu-icon">&#9776;</div>
        <div className="menu-close">&#10006;</div>
        </div>
    </header>


    <div>
        <div class="header-content">
        <div className="header-text">
                <h3 className="header-h3">Creative work, creative mind</h3>
                <h1 className="h1-header">We Are Digital Creative Agency</h1>
                <p className="header-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</p>
                <button className="menu-button">Get in Touch</button>
            </div>

            <img className="img-header-1" src={headimgf}/>
            <img className="img-header-2" src={headimgs}/>
        </div>

        <div class="header-info">
    <div class="info-content">
        <img class="info-img" src={headinfoimg1}/>
        <div class="inf-content-text">
        <h5 class="info-text">Design</h5>
        <p class="info-p">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</p>
    </div>
    </div>
    <div class="info-content">
        <img class="info-img" src={headinfoimg2}/>
        <div class="inf-content-text">
        <h5 class="info-text">Development</h5>
        <p class="info-p">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</p>
        </div>
    </div>
    <div class="info-content">
      <img class="info-img" src={headinfoimg3}/>
      <div class="inf-content-text">
      <h5 class="info-text">Testing & QA</h5>
      <p class="info-p">Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</p>
      </div>
    </div>
</div>
    </div>

    
    </div>
        )
    }
}

export default Header