import React, {Component} from "react";

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalDays: [
                {
                    date: "4/28/2017 (20.33 hours total)",
                    description: 
                    `This is the final day that I went to Motorola.

                    I went to get radios from Mike. We talked about how the radios connect to the repeater over the air. We also talked about how mountains can make or break signals over long distances. If a mountain is in the way of the signal, the radios cannot talk to each other because radio signals cannot go through mountains (or lead).
                    
                    Mike and I talked about how the conventional radios have channels because the user is changing the frequency on which the radios are transmitting information between each other. Trunked or Connect Plus Radio have groups because there is only one frequency, and that is located on the repeater via the control channel, which is surprisingly not on the controller! A talk group is just a number and a message.
                    
                    Trunked radio has aliases that point to the same thing, sort of like how strings work in java. So for example, when in a group call, every radio would show the name of the person talking instead of that individual's id on all the radios listening to the conversation. This is helpful because people do not have to memorize numbers and names.
                    
                    We also talked about zones. Some companies can have up to sixteen zones, while other companies may just have one zone. The number of zones depends on what is needed by the company. Usually, a bigger company requires more zones than a smaller company.
                    
                    When radios switch groups in trunked radio, the radio is re-registered to affiliate with that group. The controller also changes its database to accommodate for the change of group.
                    
                    Mike also showed me a little bit of the software that the radios use. Connect Plus needs two software programs. The conventional zone needs only one software program. Connect Plus uses a lot more channels, but it is hard to implement all of them because of the two software program requirement. I cannot show this because of proprietary reasons.
                    
                    After 20 hours, I have come back to the routes of my project, and it is fascinating to see my research in real life! I believe I have learned a lot through my research and this project, and am thankful for this opportunity to challenge myself while learning something new! The challenge of learning the technical jargon and reading multiple documents was worth the effort.`
                },
                {
                    date: "4/26/2017 (19.33 hours total)",
                    description: 
                    `Mike talked about Wireshark, which is the capture between the controller and the repeater, and airtracer, which is the capture between the radio and the repeater.

                    Wireshark is used when the repeater and controller are sending messages between each other. The controller and the repeater talk through an Ethernet.
                    
                    Airtracer is used when the radio and the repeater are talking and one has to debug the messages between the radio and the repeater. A third radio is put on the same frequency so that one is able to see the messages between the radio and repeater.
                    
                    I got to visually see one of the communication paths on the repeater be continuously yellow. This was interesting to me because this signifies that that communication path is continuously streaming control messages through the air. I also got to see how fast the radio registers with the controller. It actually takes longer for the radio to boot up than it is for the controller to register the radio!
                    
                    Mike showed me control channel rollover, which is when the control channel switches from one slot to the other slot. This is so that the same repeater does not have to go through a lot of wear and tear. Mike also demonstrated how group ids work. It is interesting that the repeater has the control channel, but all the repeater does is transmit information to the radio. This is interesting because I would have thought that the controller has the control channel, but that is not the case.
                    
                    Software in the radio is in C, while the controller uses C++ for its software.
                    
                    Messages are stored in bytes and are usually in hexadecimal. Binary would make the messages really hard to read. There is a text that you refer to in order to decode those messages.
                    
                    At the end of the meeting, I got to see a controller and multiple repeaters at a site. It was really cool to see so many repeaters in the same room. It is cool to see my research in a broader scope.
                    
                    Next time I will talk with Mike about the different zones a radio has. I will also talk about how the location of a zone can make or break the transmission of messages. I will then get my own radios to take home and use for my presentation. And I will briefly touch upon the software that is used to program the radios.
                    `
                },
                {
                    date: "4/6/2017 (18.33 total hours)",
                    description:
                    `Today I reviewed what I have learned throughout my research. I read an introduction to emergency calls, man down calls, and the difference between the physical serial number and the serial number authentication.

                    The emergency call is made through pressing the emergency button. The tone of the call can be "silent" or "regular", depending on how one programs the radio. The emergency hang time can be longer than the group call hang time, meaning that the destination radios have more time to respond before the call is placed in the busy queue. Emergency calls have highest priority.
                    
                    The man down call is used when users are in isolated environments or in hazardous areas. There are different movement types that initiate the man down call. One is none, which does not respond to movement. Another is the tilt alarm which goes off when the radio is beyond an activation angle. Movement and anti-movement types work the same as the tilt alarm except that there is either movement or no movement respectively.
                    
                    There are different beacon options. One is no beacon, another is an audible beacon, which is high pitched and has a periodic tone, and the last is an audible beacon with a visual beacon.
                    
                    The serial number is shorter than the physical serial number and is the default of the radio. The physical serial number is hexadecimal and is highly secure. 
                    
                    This was honestly the best part of the project because after learning the technical aspects of two way radios and how they work, the actual applications that radios have in everyday life makes more sense. I will try to look at how the software that captures the messages between the radio, repeater, and controller works next time. 
                    `
                },
                {
                    date: "3/9/2017  (16.33 total hours)",
                    description:
                    `I went to Motorola after working on my research paper more. I asked Mike even more questions about any holes that I had in my paper. He has been very helpful the past two times I have visited and am grateful that he has helped me through this senior project.

                    Next time I will learn about emergency calls and man down calls.
                    `

                },
                {
                    date: "3/6/2017 (15.33 hours total)",
                    description:
                    `Today I interviewed Mike in order to fill in the holes of my research. I asked about definitions and subjects that I did not understand. Most of the words I did not know were not mentioned in the MOTOTRBO Connect Plus System Planner 1.70.

                    I am beginning to understand all of the concepts as I continue to write my research paper. If I have more questions, I will ask Mike later for more information.
                    `

                },
                {
                    date: "3/4/2017 (14.33 hours total)",
                    description:
                    `Today I continued to do work on my research in the MOTOTRBO Connect Plus System Planner. I was able to find more information. I also read my articles more to figure out the last parts that I need for research.
                    `

                },
                {
                    date: "2/17/2017 (13.083 total hours)",
                    description: 
                    `I continued to research about radios and communications through the MOTOTRBO Connect Plus System Planner. Mike showed me how interference works. Interference occurs when more than one call is on a channel. Interference makes it hard for users to hear because they are on the same frequency.
                    ​ 
                    There was nothing truly new today either. Interference was interesting to learn about because before I did not know that two calls on the same frequency could obstruct each others calls. I have read a lot, and there is still a lot to read, but I am going to push myself to learn more information about radios.
                    
                    ​I will continue to research next time.                    
                    `

                },
                {
                    date: "2/4/2017 (11.583 total hours)",
                    description:
                    `Today I continued to read about Connect Plus radios. I am now using the MOTOTRBO Connect Plus System Planner 1.70 Section 2.4 to get my information. 

                    Next time I will continue to read about the radios in the Connect Plus System Planner.                    
                    `
                },
                {
                    date: "2/3/2017 (10.833 total Hours)",
                    description:
                    `Today I went to the office and started looking at documents, specifically looked at Connect Plus. I learned about the serial number authentication and the registration group id. The serial number authentication could use the physical serial number. 

                    Mike showed me what captures are and how to get them. I found out which messages are exchanged over the wire between the repeater and the controller and over the air between the radio and the repeater. Over the wire exchange is monitored by wireshark and over the air exchange is monitored by airtracer.
                    
                    It was interesting to see how the data was captured and how to analyze that capture.  
                    `
                },
                {
                    date: "1/24/2017 (8.33 total hours)",
                    description:
                    `Today I went to the office and started looking at documents. I learned that the CTCSS (continuous tone coded squelch system) allows more than one agency to use same the same frequency without causing interference with another company on that frequency. I also learned that one can use different tones that will not interfere with the repeater. A simplex radio uses a single channel to transmit and receive information. Only two radios are needed for this transmission. I learned how group frequencies worked and also learned about what a multicast system is. I began looking at site all calls and multigroup calls. This section had a lot of material and technical jargon so it was hard to read. 

                     Next time I will start researching my own documents.
                    `
                },
                {
                    date: "1/23/2017 (4.33 total hours)",
                    description:
                    `It has been about 2 months since I have visited the office. I had to refresh my memory on what I already knew since I have not seen Mike in a while.

                    Today Mike and I talked about how to set up group calls and individual calls. I learned through reading that there is a time slot that radios are assigned to. There is an option board in the radio that allows the radio to have a multigroup call or a site all call. I also learned about the Source ID and the Destination ID. I learned that to register a radio, the radio has to have a valid ID and it has to be active. Call requests have 3 categories: 1) call request denied, 2) call accepted (Busy Que), and 3) call accepted (channel grant). There is a subscriber inactivity timer that has a max of 8 seconds and stops when the Call Control Broadcast Message says "call in progress". If there is a trunk-to-time slot available or a channel available for radios to use, there is a "call initiation message" sent to the radio. I learned that the repeater passes audio to the controller and the controller duplicates the audio packet and distributes that packet to sites where a group is registered.
                    
                    I began to understand what the behind the scenes process is for registering a radio. The radio sends a call request to the repeater, and the repeater sends a registration request to the controller. The controller checks to see if it has the radio's group id, unit id, and physical serial number in its database. The controller then sends a registration response back to the repeater. It also sends a channel grant and a channel assignment to the repeater, which sends those back to the radio.
                    `
                },
                {
                    date: "11/18/2016 (2.33 hours total)",
                    description:
                    `Today Mike talked about conventional and trunked radio. He first talked to me about conventional radio. He told me that there is one repeater used in conventional radio. That repeater extends the range of communications. He said that there could be more than one repeater, and each company has their own repeater. The problem is that each company is fixed to one frequency, so conventional radio is inefficient because not every company can talk at the same time. 
                    
                    Trunking communications allow companies to have more than one path in order to communicate with each other. This makes trunking communications more efficient than conventional radio because individuals do not have to wait long in order to talk with each other. In conventional radio the user had to select the channel manually, whereas in trunked radio, a controller decides which channel users should use to talk. The controller has an intelligent that listens to requests and assigns them accordingly depending on which channels are available. If there are no channels available, the radio is put on the busy queue, which is a wait list, until there is a channel available to put a call on the frequency.
                    
                    Next time I will learn about how radios register on Connect Plus, a type of trunked radio produced by Motorola.
                    `
                },
                {
                    date: "11/14/2016 (1.66 hours total)",
                    description:
                    `I read an article about AM vs FM before meeting Mike

                    Mike told me how bandwidth is 64 kilobytes for radios and that cell phones are similar to radios. He talked about how the carrier frequency changes based on the amplitude or volume of the speaker. Mike told me that the higher the frequency of the carrier wave, the more compact it is. He also told me that the higher the bandwidth, the more information you can store and the more calls you can have. He told me that FM does not change amplitude and is not static. He told me that sound waves cannot go for long distances so sound waves must be modulated. Modulation, Mike said, is the way that waves carry information. He said that digital is better than static radio because one hears white noise in static radio. 
                    `
                },
                {
                    date: "5/15/2016 (1 hour total)",
                    description:
                    `Today I went into Motorola to see my mentor Mike.

                    Mike gave me an overview on how radios are used in everyday life. He briefly touched on frequency modulation and amplitude modulation.
                    
                    Next time I meet with Mike, I will talk more about amplitude and frequency modulation.                    
                    `
                }
            ]
        };
    }

    render() {
        let blogInfo = [];
        for(let index in this.state.journalDays) {
            blogInfo.push(<BlogDays key={index} days={this.state.journalDays} myIndex={index}/>);
        }
        return (
            <div>
                <h1>Hours Journal</h1>
                <br></br>
                {blogInfo}
            </div>
        );
    }
}

const BlogDays = (props) => {
    console.log(props.days);
    // console.log(props.myIndex);
    return (
        <>
        <h2>{props.days[props.myIndex].date}</h2>
        <p style={{whiteSpace: "pre-line"}}>{props.days[props.myIndex].description}</p>
        <br></br>
        </>
    )
}
export default Blog;    