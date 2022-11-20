import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = ()=> {
    return (
        <header className='app-header'>
        <div className='logo-container'>
               <img className='logo' src={`/images/icon.svg`} alt="logo"/>
               <span className='logo-text'>Instaclone</span>
           </div>
           <Link to="/createPost">
           <img className='header-camera' src={`/images/camera.png`} alt="camera" ></img>
           </Link>
           </header>
    )
}
export default Header