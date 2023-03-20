import React from 'react';
import "../overAllCss.css";
import fb from "../../images/facebook-24.png";
import insta from "../../images/instagram-2-24.png";
import LIn from "../../images/linkedin-6-24.png";
import Twi from "../../images/twitter-5-24.png"
import klassy from "../../images/klassy-logo.png"
import MainLogo2 from "../../images/MainLogo2.png";
import "./Section7.css";

const Section7_last = () => {
    return (
        <div>

            <div class="section7">
                <div id="social-media-logo" class="bottom-section-item">
                    <div class="logo"><img src={fb} alt=""></img></div>
                    <div class="logo"><img src={insta} alt=""></img></div>
                    <div class="logo"><img src={LIn} alt=""></img></div>
                    <div class="logo"><img src={Twi} alt=""></img></div>
                </div>
                <div id="website_logo" class="bottom-section-item">
                    {/* <img src={MainLogo2} alt=""></img> */}
                </div>
                <div id="copy_right" class="bottom-section-item">
                </div>
            </div>
        </div>
    )
}
export default Section7_last;