import React from "react";
import { Link } from "react-router-dom";
import './Landing-Page.css';

const LandingPage = ()=>  {
    return(
        <>
        <div className="Landing">
          <img className="landing_img" src={'/images/lens-1418954.png'} alt="" />
            <div className="name_button">
                <h2 className="name">10x Team 04</h2>
                <Link className="button" to='/post'>Enter</Link>
            </div>
        </div>
        </>
    )
}


export default LandingPage