import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

//containers to load content 
//importing from the export
import Home from "./Home";
import Research from "./Research";
import PracticalExperience from "./PracticalExperience";
import Mentor from "./Mentor";
import Growth from "./Growth";
import Blog from "./Blog";

//scroll functionality
import ScrollToTop from './components/ScrollToTop';

class Main extends Component {
    render() {
        return (
            // HashRouter provides foundation for navigation and browser history handling
            <HashRouter>
                <div>
                    <h1>Mobile Radio Protocols</h1>

                    {/* navigation links, the to prop links to the right URL*/}
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/research">Research</NavLink></li>
                        <li><NavLink to="/practical_experience">Practical Experience</NavLink></li>
                        <li><NavLink to="/mentor">Mentor</NavLink></li>
                        <li><NavLink to="/growth">Growth</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul> 
                     {/*Route gets a path prop passed to NavLink
                        exact is used so that the home page only displays when it needs to*/}
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/research" component={Research}/>
                        <Route path="/practical_experience" component={PracticalExperience}/>
                        <Route path="/mentor" component={Mentor}/>
                        <Route path="/growth" component={Growth}/>
                        <Route path="/blog" component={Blog}/>
                    </div>  
                    <ScrollToTop/>
                </div>
            </HashRouter>
        )
    }
}

export default Main;