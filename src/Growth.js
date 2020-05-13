import React, {Component} from "react";

import evaluation from './images/evaluation.png';

class Growth extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "left"}}>Self-Evaluation</h1>
                <br></br>
                <img src={evaluation} alt="reflection" style={{height: 300}}/>
                <h2 style={{color: "red"}}>Challenges</h2>
                <ul>
                    <li>Although the technical jargon and the amount of information given was daunting at first, I broke the information down so that I could understood the big picture first. I then dived into the more intricate details</li>
                </ul>
                <h2 style={{color: "green"}}>Success</h2>
                <ul>
                    <li>I know more about how radio's transfer messages through the air</li>
                    <li>This project has made me more confident that I can tackle engineering problems in the future</li>
                </ul>
            </div>
        );
    }
}
export default Growth;