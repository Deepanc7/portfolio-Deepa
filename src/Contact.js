import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2>Contact me</h2>
                <p>This is my contact</p>
                <p style={{marginBottom: "2rem"}}>You can email me to @deepanc2001@gmail.com or you can click on these links below</p>
                
                <FontAwesomeIcon icon={["fab","linkedin"]} size="2x"/>
                <a href="https://www.linkedin.com/in/deepa-n-c-6039a1203/"
                style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "#ced4da"
                }}
                >Linkedin</a>

                <FontAwesomeIcon icon={["fab","github"]} size="2x"/>
                <a href="https://github.com/Deepanc7"
                style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "#ced4da"
                }}
                >GitHub</a>


            </div>
        )
    }
}
export default Contact;