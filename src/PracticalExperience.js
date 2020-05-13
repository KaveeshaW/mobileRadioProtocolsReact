import React, {Component} from "react";

// images
// wanted to have minification at the trade of off extra code (copied in two places instead of just one)
// it avoid network requests for files with smaller size
import serialNumber from './images/physical-serial-number-and-group-id_2.jpg';
import simplex from './images/simplex-radio_1.jpg';
import spectrum from './images/electromagnetic-spectrum_1.jpg';
import fireStation from './images/fire-station.jpg';
import transportation from './images/transportation.jpg';
import bandwidth from './images/bandwidth-example-2_1.gif';
import groupChannelSoftware from './images/group-and-channels-software_2.jpg';
import zones from './images/switching-zones_1.jpg';
import conventionalRadio from './images/conventionalRadio2.jpg';
import twoZones from './images/twoZones.jpg';


class PracticalExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myDays : [
                {
                    "whichDay": "Day 3- January 23, 2017",
                    focusedOn: ['Call Setup',
                                'Registration',
                                'The Busy Queue'],
                    imgSrc: serialNumber,
                    alt: "physical serial numbers and groupid",
                    explanation: "This picture shows a group number which is used for group calls in connect plus radio."
            
                },
                {
                    "whichDay": "Day 4- January 24, 2017",
                    focusedOn: ['Simplex radio', 
                                'CTCSS (continuous tone coded squelch system) - allows multiple agencies to use the same frequency without interrupting a company using that frequency in conventional radio'
                               ],
                    imgSrc: simplex,
                    alt: "simple radios uses a single chanel to transmit and recieve information",
                    explanation: "This picture shows how simplex radios work. It uses a single channel to transmit and receive information."
                },
                {
                    "whichDay": "Day 5- Feburary 3, 2017",
                    focusedOn: ['Learning very basic Wireshark captures']
                },
                {
                    "whichDay": "Days 6-8 (February 4, 2017, Feburary 17, 2017, and March 4, 2017)",
                    focusedOn: ['Radio Registration', 
                                'De-Registration', 
                                'Call Setup', 
                                'Types Of Calls'
                                ]
                },
                {
                    "whichDay": "Days 9-10 (March 6, 2017 and March 9, 2017)",
                    focusedOn: ['Emergency calls and how they are implemented',
                                'Man down calls',  
                                'The difference between the serial number authentication and the physical serial number', 
                                'Control channel acknowledgment and no control channel acknowledgment'
                                ]
                }
            ]
        };
    }

    render() {
        let dayInfo = [];
        let imgExists = false;

        //creating different instances of the components so that I do not have to call the function over and over again
        //first two entries have photos, the rest do not
        for (let index = 0; index < this.state.myDays.length; index++) {
            if(index < 2) {
                imgExists = true;
            }
            else {
                imgExists = false;
            }
            // can pass as many props as I want
            //key index is just there as a place holder, I use basically the same index in the component
            dayInfo.push(<DifferentDays key={index} whichIndex={index} hasImage={imgExists} otherDays={this.state.myDays}/>);
        }

        return (
            <div>
                <h2>Day 1- June 15, 2016</h2>
                <h3>Today was an introduction to radios</h3>
                <img style={{width: 300}} src={spectrum} alt="radio waves are part of the electromagnetic spectrum"/>
                <img src={fireStation} alt="fire-fighters use radios in order to communicate with each other"/>
                <img style={{width: 225, height: 225}}src={transportation} alt="transportation use radios in order to communicate with each other"/>
                <p>The right two pictures show that radios are essential for buisnesses to function</p>
                <br></br>
                
                <h2>Day 2- November 17, 2016</h2>
                <h3>I learned about FM and AM modulation as well as bandwidth</h3>
                <img src={bandwidth} alt="This shows how to calculate bandwidth"/>
                <p>A picture showing how to calculate bandwidth</p>
                <br></br>
                <br></br>
                
                {dayInfo}

                <h2>Day 11 (April 28, 2017) </h2>
                <br></br>
                
                <img src={groupChannelSoftware} alt="software to change the numer of channels and groups there are in the radio and controller" style={{height: 450}}></img>
                <p>This picture shows software that programmers use to change the number of channels and groups there are in the radio and in the controller.</p>
                
                <img style={{height: 300}} src={zones} alt="how to change between conventional and connect plus modes on the radio"/>
                <p>This is a picture that shows the screen that allows you to change between a conventional and connect plus modes on the radio.</p>
                <br></br>

                <img src={conventionalRadio} alt="conventional radio screen" style={{height: 300}}></img>
                <p>This is what the conventional radio screen looks like. It has what channel (frequency) you are on and the channel name.</p>
                <br></br>

                <img src={twoZones} alt="two different zones" style={{height: 300}}></img>
                <p>This shows two different zones that the radios can be in. One is the Connect Plus Zone, and the other is the Conventional Direct Zone. The Connect Plus Zone has a site, while the Conventional Direct Zone does not have a site. The Connect Plus Zone has talk groups, while the Conventional Direct Zone has channels. This is because in the Conventional Direct Zone, the user has to change the frequency manually. The Connect Plus Zone has a repeater that holds the control channel, meaning that there is only one frequency, and no user has to change his or her frequency. The talk group is only a number and a message.</p>
            </div>
        );
    }
}

const DifferentDays = (props) => {
    console.log(props);
    let days = props.otherDays;
    // not going to create a unique key because the information is not going to change that much
    const items = days[props.whichIndex].focusedOn.map((moreInfo, index) => 
        <li key={index}>
            {moreInfo}
        </li>
    );
    return (
        //use of fragments (the <>) in order to return a more than one line of html
        <>
        <h2>{days[props.whichIndex].whichDay}</h2>
        <h3>Focused On:</h3>
        <ul>{items}</ul>
        {/* put it in two seperate statements because react only allows one thing in the parent 
            the curly braces allow for conditional rendering, so they only display when they should*/}

        {props.hasImage === true &&
            <img src = {days[props.whichIndex].imgSrc} alt={days[props.whichIndex].alt}/>
        }
        {props.hasImage === true &&
            <p>{days[props.whichIndex].explanation}</p>
        }

        <br></br>
        </>
    )
}

export default PracticalExperience;