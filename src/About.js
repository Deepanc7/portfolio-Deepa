import React, {Component} from "react";
import "./About.css";
class About extends Component{
    render(){
        return(
            <div className="about">
                <h2>About me</h2>
                <div className="border"></div>
                <p>I am a developer. I also paint, sketch and read books.
                    If you are interested to contact me, head over to contact page
                </p>
            </div>
        )
    }
}
export default About;