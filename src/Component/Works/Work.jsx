import React from 'react';
import './Work.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Work = () => {
  return (
    <div className="works">
        <div className="ser-left">
            <span>Works for All </span>
            <span>Clients & Brands</span>
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             <br /> 
                Similique temporibus exercitationem nobis maiores!
             <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
             <br /> 
                Similique temporibus exercitationem nobis maiores!
            </span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work
