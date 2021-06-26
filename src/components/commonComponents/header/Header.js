import React, { Fragment } from 'react';
import covid from "./coronavirus-5107715_1920.png";
import "./Header.css";

function Header (){
    return(
        <Fragment>
            <header>
            <span className="covidTracker-heading">C<img style={{width:"60px",height:"60px"}} src={covid} alt="loading"/>VID TRACKER</span>
            </header>
        </Fragment>
    )
}

export default Header;