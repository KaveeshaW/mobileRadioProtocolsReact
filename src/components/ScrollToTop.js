//use state is a hook, useState lets you add state to function components
//don't have to convert hook to a class like you used to if you wanted to have state in the function component
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../index.css';

//not changing data or manipulating state, so DOM manipulation makes sense

//function component
//hooks do not work in classes
const ScrollToTop = () => {
    //don't show the arraw at first
    //create a variable showArrow in the constructor
    //setShowArrow changes the state of showArrow
    //showArrow doesn't have to be an object, could be a number or a string, in this case it's a boolean because I set it to false
    //useState returns a current state and a function, hence why we have two values in the array
    //react retains current value between re-renders
    const [showArrow, setShowArrow] = useState(false);

    //declared it hear because I'm using it in two different places
    const showScroll = () => {
        //if the arrow is showing but your close to the top of the page don't show the arrow
        if(showArrow && window.pageYOffset <= 400) {
            setShowArrow(false);
         }
         //show the arrow if your farther down the page
         else if(!showArrow && window.pageYOffset > 400) {
             setShowArrow(true);
         }
    }

    //when you scroll, the window checks to see whether you are above or below the threshold and shows the arrow accordingly
    window.addEventListener('scroll', showScroll);

    //is called when the fat arrow is clicked
    //used in
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <FaArrowCircleUp className = "arrowScroll" onClick = {scrollToTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default ScrollToTop;