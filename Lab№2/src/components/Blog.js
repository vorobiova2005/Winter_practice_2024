import React from "react";
import blogimg1 from "./img/img20.png"
import blogimg2 from "./img/img19.png"
import blogimg3 from "./img/img18.png"

    class Blog extends React.Component {
        render(){
            return(
        <div className="blog">
            <div className="blog-title">
                <h3>Blog</h3>
                <h2 className="h2-blog">Read Our News</h2>
            </div>
            <div className="blog-info">
            <div className="blog-content">
                <img className="blog-img" src={ blogimg1}/>
                <p className="blog-p">09 April,2022 <span class="blog-sp">by Admin</span></p>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </p>
                <a className="blog-link" href="#">Read More</a>
            </div>

            <div className="blog-content">
                <img className="blog-img" src={ blogimg2}/>
                <p className="blog-p">09 April,2022 <span class="blog-sp">by Admin</span></p>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </p>
                <a class="blog-link" href="#">Read More</a>
            </div>

            <div className="blog-content">
                <img className="blog-img" src={ blogimg3}/>
                <p className="blog-p">09 April,2022 <span class="blog-sp">by Admin</span></p>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </p>
                <a className="blog-link" href="#">Read More</a>
            </div>
            </div>
        </div>
            )
    }
    }

export default Blog   