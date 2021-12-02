import React from 'react';
import { Button } from './Button';
import './Centralpart.css';
import '../App.css';
function Centralpart() {
    return (
        <div className="central-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>THE FUTURE IS AI</h1>
            {/* <P>lets follow our destiny</P> */}
            <div className="central-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">
                    CLICK TO CONTINUE
                </Button>
            </div>
        </div>
    ) 
}

export default Centralpart
