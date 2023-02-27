import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import neww from '../../img/neww.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

const Intro = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="i-name">
                    <span>Hello my Name is</span>
                    <span>Oparinde Abefe</span>
                    <span>I and a full stack developer who is currently undergoing the ALX training, profecient learner.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="github link" />
                    <img src={LinkedIn} alt="Linkedin link" />
                    <img src={Instagram} alt = "Instagram" />
                </div>
            </div>
            <div className="intro-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={neww} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image = {Crown} txt1="Web" txt2="Developer"/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image = {Thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                {/* blur divs */}
                <div className="blur" style={{background: "rgb(238 20 255)"}}></div>
                <div className="blur2"></div>
            </div>
        </div>
    )
}

export default Intro;