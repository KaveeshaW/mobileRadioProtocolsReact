import React, {Component} from "react";

//images
import broadcastRadio from './images/broadcast-radio_1.jpg';
import twoWayRadio from './images/regular-two-way-radio.jpg';

class Home extends Component {
    render() {
        return (
            <div>
               <h2>There are two types of radios:</h2>  
              <ol>
                  <li>Broadcast radios</li>
                  <li>Two way radios</li>
              </ol>
              <h3>Broadcast Radio</h3>
              <img src={broadcastRadio} alt="broadcast radio"/>
              <p>In broadcasting radio, music or radio shows are transmitted so that people can listen to them on the receiver.</p> 
              <h3>Two Way Radio</h3>
              <img src={twoWayRadio} alt="two-way-radio"/>
              <p>Two way radios are used in the police, the fire department, hospitals, and transportation. Each organization needs two way radios to communicate quickly and efficiently.</p> 

            </div>
        )
    }
}

export default Home;