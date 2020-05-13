import React, {Component} from "react";

// images
import controller from './images/controller-xrc-9000_3.jpg';
import conventionalVSTrunked from './images/conventional-vs-trunked-radio_4.jpg';
import frequencyModulation from './images/frequency-modulation_1.gif';
import amplitudeModulation from './images/amplitude-modulation1.png';
import controlChannelTimeslot from './images/repeater-control-channel-timeslot_3.png';
import radioRegistration from './images/registration.jpg';
import noControl from './images/no-control-channel-acknowledgement_3.png';
import controlChannel from './images/control-channel-acknowledgement_4.jpg';

//papers
import researchPaper from './documents/research_paper.docx';
import workCited from './documents/works_cited.docx';

class Research extends Component {
    constructor(props) {
        super(props);
        //using arrays because its easy to display it via the map function and utilize the component
        //I also did not want to parse the sentences and wanted to not greatly reduce readability
        this.state = { 
            conventionalRadio: [
                'Fixed to one frequency​', 
                'Has dedicated channels for different users', 
                'Channels are dispersed through the use of a knob in conventional use', 
                'Users could also use a drop down menu',
                'There is only one repeater used at a time',
                'If a user wants to have a channel available, one has to program the channel into the radios',
                'Otherwise users have to wait for a call to end on a channel before he/she can use that channel',
                'Lower cost',
                'Easy to use'  
            ],
            trunkedRadio: [
                'There are multiple frequencies, and trunking allocates users among those frequencies',
                'The computer processor, or the controller, is the one that controls control channel selection',
                'Trunking radio is based on the theory that not everybody will want to use a channel at the same time, and there are more users than there are channels',
                'Because of that, trunking radios automatically assign calls to a channel when there is one available. Otherwise the trunking controller puts the call in the busy queue​, where the radios wait until there is a channel available',
                'Users do not have to wait as long',
                'The controller is expensive',
                'One communication path is used for signaling, leaving it unusable to others'
            ],
            generalFMAM: [
                'FM and AM are used to transmit information',
                'Radios only use one signal',
                'The farther the signal is from the radio, the less the signal\'s intensity will be',
                'Modulation of the frequencies or amplitudes of signals is needed in order to carry information via a carrier wave'
            ],
            FMInfo: [
                'FM is frequency modulation',
                'FM has a larger range of frequencies than AM',
                'FM needs more space to modulate the frequency because the transmitted signal must be made wider or narrower',
                'Not static'
            ],
            AMInfo: [
                'AM is amplitude modulation',
                'Signal intensity decreases as distance from radio increases',
                'Needed to carry information by a carrier wave',
                'AM is susceptible to noise (lightning and switching high voltage power lines cause crackling)'
            ],
            registration: [
                'A radio has to be registered to a controller',
                'The Connect Plus handles this',
                'Registration occurs on the control channel time slot which is a type of digital signaling that uses time division in order to get multiple conversations on the same frequency at the same time',
                'The controller checks for three IDs: the Unit ID, the Physical Serial Number. and the Group ID of the radio',
                'If all are valid, the controller accepts the registration',
                'If the radio is disabled in the controller\'s database, the controller rejects the registration',
                'De-registration is important because it tells the controller which radios and talk groups do not need resources'
            ],
            callSetup: [
                'Call requests also occur on the control channel time slot',
                'Based on the requests, the controller performs multiple checks',
                'Private Calls are made between the source radio and the destination radio',
                'Both have to be "enabled" in the controller\'s database and both have to be registered',
                'If checks are okay, the controller looks at the calls in progress',
                'If the destination radio is busy, the source radio is asked to try again',
                'If a trunk-to-time slot is needed, but there are none available, the radio into the Busy Queue',
                'If the source radio is "disabled" or not present in the database, the controller denies the call request and disables the unit'
            ],
            noControlChannelAcknowledgement: [
                'Group calls consists of one or more radio transmissions that can be heard by all radios with the same Talk Group ID',
                'MultiGroup calls have one radio talking and that radio can be heard by other radios that are programmed with the same MultiGroup ID',
                'Site all calls have one radio talking heard by all radios that have the same site where the transmission occurs',
                'Network wide all calls is a one way voice transmission that is begun by some device (that may not be a radio) that connects to the Connect Plus network with something other than a radio',
                'No control channel acknowledgment is good for group calls and getting in contact with multiple people at once'
            ],
            controlChannelAcknowledgement: [
                'Private calls consist of one or more voice transmissions between the Source ID radio and the Destination ID radio',
                'Remote monitor calls allow a user outside of the controller’s database to activate a target radio’s microphone and transmitter for a period of time',
                'Control channel acknowledgment makes sure that the destination radio is available'
            ]
        };
    }
    
    render() {
        return (
            <div>
                <h2>Research</h2>
                <h3><b>Thesis: </b></h3>
                <p>In trunked radio, which is computer-controlled radio, calls are set up between radios, using the messages that are exchanged through the air. The message exchange process is achieved through radio signal transmission methods (FM and AM).  To make a call,  one must first register the radio, and then establish the call on a trunk channel. After both registration and call setup are complete, there are many different types of calls available for radios to utilize. There are also conventional radios, and those radios are different than trunked radios and have different advantages and disadvantages than trunked radio.</p>
                
                {/* --------------------------------------------------------- */}
                <h2>Conventional Vs. Trunked Radio​</h2>
                <br></br>
                <img src={controller} alt="shows a controller"/>
                <img src={conventionalVSTrunked} alt="shows conventional vs trunked radio"/>
                <h3>Conventional Radio</h3>
                <DisplayList details={this.state.conventionalRadio}/>
                <h3>Trunked Radio</h3>
                <DisplayList details={this.state.trunkedRadio}/>
                {/* --------------------------------------------------------- */}

                {/* --------------------------------------------------------- */}
                <h2>FM and AM</h2>
                <h3>General</h3>
                <DisplayList details={this.state.generalFMAM}/>
                <h3>FM</h3>
                <img src={frequencyModulation} alt="if the modulating wave is below the x axis, the modulated result has a lower frequency. The opposite occurs if the modulating wave is above the x axis"/>
                <DisplayList details={this.state.FMInfo}/>
                <h3>AM</h3>
                <img src={amplitudeModulation} alt="if the modulating wave is below the x axis, the modulated result has a lower amplitude. The opposite occurs if the modulating wave is above the x axis"/>
                <DisplayList details={this.state.AMInfo}/>
                <br></br>
                {/* --------------------------------------------------------- */}

                {/* --------------------------------------------------------- */}
                <h2>Registration</h2>
                <DisplayList details={this.state.registration}/>
                <h3>Registration has two purposes</h3>
                <ol>
                    <li>Limits access to users</li>
                    <li>Provides controller with information to route calls and utilize RF and IP</li>
                </ol>
                <img src={controlChannelTimeslot} alt="shows an active control channel timeslot"/>
                <img style={{height: 330}}src={radioRegistration} alt="shows how registration occurs with radios"/>
                <p>The image on the left shows an active control channel timeslot</p>
                <br></br>
                <br></br>
                <br></br>
                {/* --------------------------------------------------------- */}

                {/* --------------------------------------------------------- */}
                <h2>Call Setup</h2>
                <DisplayList details={this.state.callSetup}/>
                <br></br>
                {/* --------------------------------------------------------- */}

                {/* --------------------------------------------------------- */}
                <h2>Type of Calls</h2>
                <p>There are two types of calls</p>
                <ol>
                    <li>No Control Channel Acknowledgment</li>
                    <li>Control Channel Acknowledgment</li>
                </ol>
                <h3>No Control Channel Acknowledgment</h3>
                <DisplayList details={this.state.noControlChannelAcknowledgement}/>
                <img src={noControl} alt="shows how no control channel acknowledgement works" style={{height: 275}}/>
                
                <h3>Control Channel Acknowledgment</h3>
                <DisplayList details={this.state.controlChannelAcknowledgement}/>
                <img src={controlChannel} alt="shows how control channel acknowledgement works" style={{height: 350}}/>
                {/* --------------------------------------------------------- */}

                <br></br>
                <br></br>
                <h2>Research Paper</h2>
                <a href={researchPaper} download>Download Reasearch Paper</a>
                <br></br>
                <br></br>
                <a href={workCited}download>Download Works Cited</a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

//using a component to display the lists
const DisplayList = (props) => {
    const details = props.details;
    // not going to create a unique key because the information is not going to change that much
    const items = details.map((info, index) => 
        <li key={index}>
            {info}
        </li>
    );
    return (
        <ul>{items}</ul>
    )
}

export default Research;