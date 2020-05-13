import React, {Component} from "react";

import mike from './images/mike_1.jpg';

class Mentor extends Component {
    render() {
        return (
            <div>
                <h2>Mike O'Byrne</h2>
                <br></br>
                <img src={mike} alt="Mike, my mentor for the project"></img>
                <ul>
                    <li>An expert at mobile radio protocols</li>
                    <li>He has helped author digital protocols for two-way radio communication</li>
                    <li>Mike helped me with my research paper and showed me how radios work.</li>
                </ul>
            </div>
        );
    }
}
export default Mentor;